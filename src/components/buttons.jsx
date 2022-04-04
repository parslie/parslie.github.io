import { Link } from "react-router-dom"

import "../styles/input.scss"

export function Button({ onClick, label, error }) {
  return (
    <div className="input button">
      <input type="button" onClick={onClick} value={label} />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}

export function SubmitButton({ label, error }) {
  return (
    <div className="input button">
      <input type="submit" value={label} />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}

export function LinkButton({ to, label }) {
  return (
   <Link className="input button" to={to}>
     <input type="button" value={label} />
   </Link> 
  )
}
