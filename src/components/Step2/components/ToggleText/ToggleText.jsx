import Toggler from 'components/UI/Toggler/Toggler';
import './ToggleText.scss';
import FAQ from 'components/UI/FAQ/FAQ';

export default function ToggleText({ title }) {
  const faqstyle = {
    marginLeft: 10,
  };
  return (
    <div className="toggletext">
      <Toggler />
      <p className="toggletext__title">{title}</p>
      <FAQ style={faqstyle} />
    </div>
  );
}
