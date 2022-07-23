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

function ButtonField({ label, onClick, disabled=false }) {
  return (
    <div className="input-field">
      <button onClick={onClick} disabled={disabled}>{label}</button>
    </div>
  );
}

function CombinationField({ children }) {
  return <div className="combination-field">{children}</div>;
}

function LinkButtonField({ label, to }) {
  const history = useHistory();
  const onClick = () => history.push(to);
  return <ButtonField label={label} onClick={onClick} />;
}

function SubmitField({ label, disabled=false }) {
  return (
    <div className="input-field">
      <button type="submit" disabled={disabled}>{label}</button>
    </div>
  );
}

function TextField({ name, placeholder, type="text", multiline=false }) {
  return (
    <div className="input-field">
      {multiline
        ? <textarea id={name} name={name} placeholder={placeholder} type={type} />
        : <input    id={name} name={name} placeholder={placeholder} type={type} />}
    </div>
  );
}

export default Form;
export { ButtonField, CombinationField, LinkButtonField, SubmitField, TextField };
