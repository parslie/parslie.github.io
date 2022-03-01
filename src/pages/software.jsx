import React from 'react'
import useSWR from 'swr'
import { SoftwarePost } from '../components/post'

const mockPostData = {
  content: `# Title
  Text that is associated with the post.`,
  repository: {
    owner: 'parslie',
    name: 'parslie.github.io'
  },
  date: '2022-02-25T22:49:34.687340Z',
}

function SoftwarePage({ me }) {
  const { data: posts } = useSWR('/posts/software/')

  return (
    <div className='grid'>
      {posts && posts.map((postData, i) => <SoftwarePost key={i} me={me} data={postData} />)}
    </div>
  )
}

export default SoftwarePage
