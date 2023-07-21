import './TextInput.scss';

export const TextInput = ({
  placeholder,
  maxLength = 200,
  value,
  onChange,
  style = {},
  onKeyDown = () => {},
  errortext,
  type = 'text',
}) => {
  return (
    <div className="textinput__container" style={style}>
      {errortext && <p className="textinput__erorr">{errortext}</p>}
      <input
        maxLength={maxLength || 200}
        type={type}
        className="textinput"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
