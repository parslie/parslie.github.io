import "../styles/input.scss";

export function TextField({ name, placeholder, options=[], multiline=false, type="text", error="" }) {
  return (
    <div className="input-field">
      {error && <label for={name}>Error: {error}</label>}
      {multiline ? <textarea id={name} name={name} placeholder={placeholder} type={type} />
                 : <input    id={name} name={name} placeholder={placeholder} type={type} list={options ? `${name}-list` : null} />}
      {options && (
        <datalist id={`${name}-list`}>
          {options.map((option, i) => <option key={i} value={option} />)}
        </datalist>
      )}
    </div>
  )
}
