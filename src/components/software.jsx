import ReactMarkdown from "react-markdown"

import { mutate } from "swr"
import { del } from "../utils/request"

import "../styles/articles.scss"

export function Post({ data, me }) {
  const date = new Date(data.date)
  const repoUrl = `https://github.com/${data.repository}`
  const repoString = `The repository can be found [here](${repoUrl})!`

  const deletePost = () => {
    del(`/posts/software/${data.id}/`, true).then(res => {
      mutate("/posts/software/", [])
    })
  }

  return (
    <article className="post">
      <header>
        <h1>{data.title}</h1>
        <h5>{date.toLocaleString("sv-SE")}</h5>
      </header>
      <section>
        <ReactMarkdown children={data.content} />
        <ReactMarkdown children={repoString} />
      </section>
      
      {me && me.is_superuser && (
        <footer>
          <h5>TODO: add delete and edit button here</h5>
        </footer>
      )}
    </article>
  )
}
