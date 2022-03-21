import { Link } from "react-router-dom"

import "./input.scss"

export function Button({ onClick, label, error }) {
  return (
    <div className="form-button button">
      <input type="button" onClick={onClick} value={label} />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}

export function SubmitButton({ label, error }) {
  return (
    <div className="form-button button submit">
      <input type="submit" value={label} />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}

export function LinkButton({ to, label }) {
  return (
    <Link to={to} className="form-button button">
      <input type="button" value={label} />
    </Link>
  )
}
