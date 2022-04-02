import "../styles/prompts.scss"
import "../styles/articles.scss"

import Form from "./form"
import { Button } from "./buttons"

export function YesNoPrompt({ title, onYes, onNo }) {
  return (
    <div className="prompt-container">
      <div className="prompt-perimeter" onClick={onNo} />
      <article className="prompt">
        <header>
          <h1>{title}</h1>
        </header>
        <section>
          <Button label="Yes" onClick={onYes} />
          <Button label="No" onClick={onNo} />
        </section>
      </article>
    </div>
  )
}

export function FormPrompt({ title, onSubmit, onCancel, children }) {
  return (
    <div className="prompt-container">
      <div className="prompt-perimeter" onClick={onCancel} />
      <Form className="prompt" title={title} onSubmit={onSubmit}>
        {children}
      </Form>
    </div>
  )
}
