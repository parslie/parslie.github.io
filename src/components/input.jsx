import { useHistory } from "react-router-dom";

import "./input.scss";

function Form({ children, onSubmit }) {
  const preSubmit = (e) => {
    e.preventDefault();
    if (onSubmit)
      onSubmit(e);
  };

  return <form onSubmit={preSubmit}>{children}</form>;
}

function TextField({ name, placeholder, options=[], multiline=false, type="text", error="" }) {
  return (
    <div className="input-field">
      {multiline ? <textarea id={name} name={name} placeholder={placeholder} type={type} /> 
                 : <input    id={name} name={name} placeholder={placeholder} type={type} list={options ? `${name}-list` : null} />}
      {options && (
        <datalist id={`${name}-list`}>
          {options.map((option, i) => <option key={i} value={option} />)}
        </datalist>
      )}
      {error && <label for={name}>Error: {error}</label>}
    </div>
  );
}

function DropDownField({ name, placeholder, options, values, error="", onChange }) {
  return (
    <div className="input-field">
      <select name={name} defaultValue="" onChange={onChange}>
        <option disabled value="">{placeholder}</option>
        {options && options.map((option, i) => <option key={i} value={values[i]}>{option}</option>)}
      </select>
      {error && <label for={name}>Error: {error}</label>}
    </div>
  );
}

function SubmitField({ label, error="" }) {
  return (
    <div className="input-field">
      <button type="submit">{label}</button>
      {error && <label>Error: {error}</label>}
    </div>
  );
}

function ButtonField({ label, error="", onClick }) {
  return (
    <div className="input-field">
      <button onClick={onClick}>{label}</button>
      {error && <label>Error: {error}</label>}
    </div>
  );
}

function LinkButtonField({ label, to }) {
  const history = useHistory();
  return <ButtonField onClick={() => history.push(to)} label={label} />;
}

function CombinationField({ children, error }) {
  return (
    <div className="combination-field">
      <div className="row">{children}</div>
      {error && <label>Error: {error}</label>}
    </div>
  )
}

export default Form;
export { ButtonField, CombinationField, DropDownField, LinkButtonField, SubmitField, TextField };
