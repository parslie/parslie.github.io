export default function Form({ title, onSubmit, children }) {
  const onPreSubmit = (e) => {
    e.preventDefault()
    onSubmit(e)
  }
  
  return (
    <article className="form">
      <header>
        <h1>{title}</h1>
      </header>
      <section>
        <form onSubmit={onPreSubmit}>
          {children}
        </form>
      </section>
    </article>
  )
}
