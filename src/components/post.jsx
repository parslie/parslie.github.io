import ReactMarkdown from 'react-markdown'

export function SoftwarePost({ me, data }) {
  const repoUrl = `https://github.com/${data.repository.owner}/${data.repository.name}`
  const repoMarkdown = `The repository can be found: [**here**](${repoUrl})`

  return (
    <article>
      <ReactMarkdown children={data.content} />
      <ReactMarkdown children={repoMarkdown} />
    </article>
  )
}
