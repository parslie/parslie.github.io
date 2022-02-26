export function SingleLineTextInput({ label, name, placeholder }) {
  return (
    <div className='row'>
      <label>{label}</label>
      <input type='text' name={name} placeholder={placeholder} />
    </div>
  )
}

export function PasswordInput({ label, name, placeholder }) {
  return (
    <div className='row'>
      <label>{label}</label>
      <input type='password' name={name} placeholder={placeholder} />
    </div>
  )
}

export function EmailInput({ label, name, placeholder }) {
  return (
    <div className='row'>
      <label>{label}</label>
      <input type='email' name={name} placeholder={placeholder} />
    </div>
  )
}

export function MultiLineTextInput({ label, name, placeholder }) {
  return (
    <div className='row'>
      <label>{label}</label>
      <textarea name={name} placeholder={placeholder} />
    </div>
  )
}
