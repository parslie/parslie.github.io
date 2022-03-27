import "./articles.scss"

export default function Form({ title, onSubmit, children }) {
  const internalOnSubmit = (e) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <article className="form">
      <h2 className="title">{title}</h2>
      <form onSubmit={internalOnSubmit}>
        {children}
      </form>
    </article>
  )
}
