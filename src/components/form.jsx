export default function Form({ title, onSubmit, children, className }) {
  const onPreSubmit = (e) => {
    e.preventDefault()
    onSubmit(e)
  }
  
  return (
    <article className={className}>
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
