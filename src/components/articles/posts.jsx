import ReactMarkdown from "react-markdown"

import "./articles.scss"

export function HomePost({ me, data }) {
  const dateObj = new Date(data.date)

  return (
    <article className="post">
      <h2 className="title">{data.title}</h2>
      <h5 className="date">{dateObj.toLocaleString("sv-SE")}</h5>
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </article>
  )
}

export function SoftwarePost({ me, data }) {
  const dateObj = new Date(data.date)
  const repoMarkdown = `The repository can be found [here](https://github.com/${data.repository}).`

  return (
    <article className="post">
      <h2 className="title">{data.title}</h2>
      <h5 className="date">{dateObj.toLocaleString("sv-SE")}</h5>
      <ReactMarkdown>{data.content}</ReactMarkdown>
      <ReactMarkdown>{repoMarkdown}</ReactMarkdown>
    </article>
  )
}
