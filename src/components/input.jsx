import "../styles/input.scss";

export function TextField({ name, placeholder, options=[], multiline=false, type="text", error="" }) {
  return (
    <div className="input-field">
      {multiline ? (
        <div className="resizer-container">
          <textarea id={name} name={name} placeholder={placeholder} type={type} />
          <div className="resizer"></div>
        </div>
      ) : <input id={name} name={name} placeholder={placeholder} type={type} list={options ? `${name}-list` : null} />}
      {options && (
        <datalist id={`${name}-list`}>
          {options.map((option, i) => <option key={i} value={option} />)}
        </datalist>
      )}
      {error && <label for={name}>Error: {error}</label>}
    </div>
  )
}
