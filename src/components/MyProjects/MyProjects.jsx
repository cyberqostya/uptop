import Plate from 'components/UI/Plate/Plate';
import './MyProjects.scss';
import Button from 'components/UI/Button/Button';
import TableRow from './TableRow/TableRow';
import TableHead from './TableHead/TableHead';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getCookie from 'utils/getCookie';

export default function MyProjects() {
  const plateStyle = {
    padding: '60px 25px',
    width: '100%',
    margin: '30px 0',
  };


  // Получение данных с сервера при первом рендеринге
  const [projects, setProjects] = useState([]);
  const [paidProjects, setPaidProjects] = useState([]);
  useEffect(() => {
    if (getCookie('projects')) {
      setProjects(JSON.parse(getCookie('projects')));
    }
    if (getCookie('paidProjects')) {
      setPaidProjects(JSON.parse(getCookie('paidProjects')));
    }
  }, []);


  return (
    <>
      <div className="myprojects__title-container">
        <h2 className="myprojects__title">Мои проекты</h2>
        <Link to="/">
          <Button title="Добавить проект" classes={['outlined']} />
        </Link>
      </div>

      <Plate style={plateStyle}>
        {projects.length ? (
          <div className="myprojects__table">
            <TableHead />
            {projects.map((i, ind) => {
              return (
                <TableRow key={ind} data={i} />
              );
            })}
          </div>
        ) : (
          <p style={{ textAlign: 'center', fontSize: 20, lineHeight: '1em' }}>
            Черновиков пока нет
          </p>
        )}
      </Plate>

      {paidProjects.length > 0 &&
        <Plate style={plateStyle}>
          <div className="myprojects__table">
            <TableHead paidProjects={true} />
            {paidProjects.map((i, ind) => {
              return (
                <TableRow key={ind} data={i} paidProjects={true} />
              );
            })}
          </div>
        </Plate>
      }
    </>
  );
}
