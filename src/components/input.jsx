import "../styles/input.scss";

export function TextField({ name, placeholder, multiline=false, type="text", error="" }) {
  return (
    <div className="input-field">
      {error && <label for={name}>Error: {error}</label>}
      {multiline ? <textarea id={name} name={name} placeholder={placeholder} type={type} />
                 : <input    id={name} name={name} placeholder={placeholder} type={type} />}
    </div>
  )
}
