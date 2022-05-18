import "../styles/input.scss";

export function TextField({ name, placeholder, options=[], multiline=false, type="text", error="" }) {
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
  )
}

export function ButtonField({ label, error="", onClick }) {
  return (
    <div className="input-field">
      <button onClick={onClick}>{label}</button>
      {error && <label>Error: {error}</label>}
    </div>
  )
}

export function SubmitField({ label, error="" }) {
  return (
    <div className="input-field">
      <button type="submit">{label}</button>
      {error && <label>Error: {error}</label>}
    </div>
  )
}
