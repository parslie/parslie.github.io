import { Link } from "react-router-dom"

import "../styles/input.scss"

// TODO: create way to show input errors

export function Button({ title, onClick, name, type }) {
  return <button className="button" onClick={onClick} name={name} type={type}>{title}</button>
}

export function LinkButton({ title, to }) {
  return <Link className="button" to={to}>{title}</Link>
}

export function SingleLineField({ placeholder, name, type, onChange }) {
  return <input className="text-field" type={type} placeholder={placeholder} 
    name={name} onChange={onChange} />
}

export function MultiLineField({ placeholder, name, onChange }) {
  return <textarea className="text-field" name={name} onChange={onChange}
    placeholder={placeholder} />
}

export function SelectMenu({ name, placeholder, labels, values }) {
  return (
    <select className="select-menu" name={name} defaultValue="">
      <option disabled value="">
        {placeholder}
      </option>
      {values.map((value, i) => (
        <option key={i} value={value}>
          {labels && labels.length > i ? labels[i] : value}
        </option>
      ))}
    </select>
  )
}
