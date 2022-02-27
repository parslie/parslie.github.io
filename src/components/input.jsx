import '../styles/input.scss'

export function InputField({ label, children, error }) {
  return (
    <div className={`input-group input-field ${error ? 'error' : ''}`}>
      <label>{label}</label>
      {children}
      {error && <h5>{error}</h5>}
    </div>
  )
}

export function InputButton({ label, isSubmit, error }) {
  return (
    <div className={`input-group input-button ${error ? 'error' : ''}`}>
      {isSubmit
        ? <input type='submit' value={label} />
        : <input type='button' value={label} />
      }
      {error && <h5>{error}</h5>}
    </div>
  )
}
