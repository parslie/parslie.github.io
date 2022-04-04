import { useState } from "react"
import ReactMarkdown from "react-markdown"

import { mutate } from "swr"
import { del } from "../utils/request"

import "../styles/articles.scss"

import { Button } from "./buttons"
import { YesNoPrompt } from "./prompts"

export function Post({ data, me }) {
  const [ showDeletePrompt, setShowDeletePrompt ] = useState(false)

  const date = new Date(data.date)

  const deletePost = () => {
    del(`/posts/home/${data.id}/`, true).then(res => {
      mutate("/posts/home/")
      setShowDeletePrompt(false)
    })
  }

  return (
    <article>
      <header>
        <h1>{data.title}</h1>
        <h5>{date.toLocaleString("sv-SE")}</h5>
      </header>
      <section>
        <ReactMarkdown children={data.content} />
      </section>
      
      {me && me.is_superuser && (
        <footer>
          <h3>Admin Options:</h3>
          <Button label="Delete" onClick={() => setShowDeletePrompt(true)} />
        </footer>
      )}

      {showDeletePrompt && <YesNoPrompt title={`Do you really want to delete "${data.title}"?`}
        onNo={() => setShowDeletePrompt(false)} onYes={deletePost} />}
    </article>
  )
}
