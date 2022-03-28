import ReactMarkdown from "react-markdown"

import "./articles.scss"

export default function Message({ me, data })
{
  const isSelf = me.username === data.sender.username // TODO: use ID instead
  const dateObj = new Date(data.date)

  return (
    <article className={"message " + (isSelf ? "right" : "left")}>
      <ReactMarkdown children={data.content} />
      <h5>Sent by {data.sender.username} at {dateObj.toLocaleString("sv-SE")}</h5>
    </article>
  )
}