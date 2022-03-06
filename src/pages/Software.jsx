import useSWR, { mutate } from 'swr'
import { post } from '../utils/request'

import SoftwarePost from '../components/posts/SoftwarePost'
import { SingleLineField, Button, MultiLineField } from '../components/input'

function SoftwarePage({ me }) {
  const { data: posts } = useSWR('/posts/software/')

  const createPost = (e) => {
    e.preventDefault()

    const data = {
      title: e.target.title.value,
      content: e.target.content.value,
      repository: `${e.target.repoOwner.value}/${e.target.repoName.value}`,
    }

    // TODO: handle input errors
    post('/posts/software/', data, true).then(res => {
      mutate('/posts/software/')
      e.target.reset()
    })
  }

  return (
    <main>
      {me && me.is_superuser && (
        <article>
          <h1>Create a Post</h1>
          <form onSubmit={createPost}>
            <SingleLineField placeholder='Enter title here...' name='title' type='text' />
            <MultiLineField placeholder='Enter markdown content here...' name='content' />
            <div className='row'>
              <SingleLineField placeholder='Enter repository owner here...' name='repoOwner' type='text' />
              <span>/</span>
              <SingleLineField placeholder='Enter repository name here...' name='repoName' type='text' />
            </div>
            <Button type='submit' title='Post' />
          </form>
        </article>
      )}

      {posts && posts.map((post, i) => <SoftwarePost key={i} data={post} me={me} />)}
    </main>
  )
}

export default SoftwarePage
