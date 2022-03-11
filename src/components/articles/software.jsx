import ReactMarkdown from 'react-markdown'

import '../../styles/articles.scss'

function SoftwarePost({ data, me }) {
  const dateObj = new Date(data.date)
  const repoMarkdown = `The repository can be found [here](https://github.com/${data.repository}).`

  return (
    <article>
      <h1>
        {data.title}
        {me && me.is_superuser && ` (id: ${data.id})`}
      </h1>
      <ReactMarkdown children={data.content} />
      <ReactMarkdown children={repoMarkdown} />
      <h5>Posted on {dateObj.toLocaleString('sv-SE')}</h5>
    </article>
  )
}

export default SoftwarePost
