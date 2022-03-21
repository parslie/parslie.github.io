import "./input.scss"

export function SingleLineField({ id, name, label, placeholder, onChange, type, error }) {
  return (
    <div className="form-field text-field">
      <label className="label" for={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}

export function MultiLineField({ id, name, label, placeholder, onChange, type, error }) {
  return (
    <div className="form-field text-field">
      <label className="label" for={id}>{label}</label>
      <textarea type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}

export function SelectMenu({ 
  id, name, label, options, values, defaultOption, defaultValue="", onChange, error 
}) {
  return (
    <div className="form-field select-menu">
      <label className="label" for={id}>{label}</label>
      <select id={id} name={name} defaultValue={defaultValue} onChange={onChange}>
        <option disabled value={defaultValue}>{defaultOption}</option>
        {options.map((option, i) => (
          <option key={i} value={values[i]}>{option}</option>
        ))}
      </select>
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}