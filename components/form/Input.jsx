const Input = props => {
  return (
    <div className="field">
      <label htmlFor={props.name} className="label">
        {props.title}
      </label>
      <input
        className="input"
        id={props.name}
        name={props.name}
        type={props.type}
        defaultValue={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
