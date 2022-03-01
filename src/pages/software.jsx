import React from 'react'
import useSWR from 'swr'
import { SoftwarePost } from '../components/post'

function SoftwarePage({ me }) {
  const { data: posts } = useSWR('/posts/software/')

  return (
    <div className='grid'>
      {posts && posts.map((postData, i) => <SoftwarePost key={i} me={me} data={postData} />)}
    </div>
  )
}

export default SoftwarePage
