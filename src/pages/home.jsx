import React from 'react'

function HomePage({ me }) {
  return (
    <div className='grid'>
      <article>
      <h1>Home Post</h1>
        <p>
          Posts on this page be stored directly in the front end. This is because
          the posts on this page won't be updated that frequently anyway, so storing them
          in the backend is wasteful.
        </p>
      </article>
    </div>
  )
}

export default HomePage
