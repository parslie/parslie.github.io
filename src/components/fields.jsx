import "../styles/input.scss"

export function SingleLineText({ error, type="text", name, placeholder, onChange }) {
  return (
    <div className="input text-field">
      <input type="text" type={type} onChange={onChange} name={name} placeholder={placeholder} />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}

export function MultiLineText({ error, type="text", name, placeholder, onChange }) {
  return (
    <div className="input text-field">
      <textarea type="text" type={type} onChange={onChange} name={name} placeholder={placeholder} />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}

export function SelectMenu({ error, name, options, values, defaultOption="--Select an option--", defaultValue="", onChange }) {
  return (
    <div className="input select-menu">
      <select name={name} defaultValue={defaultValue} onChange={onChange}>
        <option disabled value={defaultValue}>{defaultOption}</option>
        {options.map((option, i) => <option key={i} value={values[i]}>{option}</option>)}
      </select>
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}
