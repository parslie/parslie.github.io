import { useState } from "react"

import useSWR, { mutate } from "swr"
import { post } from "../utils/request"

import Form from "../components/form"
import { Post } from "../components/home"
import { MultiLineText, SingleLineText } from "../components/fields"
import { Button, SubmitButton } from "../components/buttons"

export default function HomePage({ me }) {
  const { data: posts } = useSWR("/posts/home/")

  const [ titleError, setTitleError ] = useState()
  const [ contentError, setContentError ] = useState()
  const [ generalError, setGeneralError ] = useState()

  const createPost = (e) => {
    const postData = {
      title: e.target.title.value,
      content: e.target.content.value,
      priority: 0,  // TODO: create input field
    }

    post("/posts/home/", postData, true).then(res => {
      e.target.reset()
      setTitleError("")
      setContentError("")
      setGeneralError("")
      mutate("/posts/home/")
    }).catch(({ response: res }) => {
      setTitleError(res.data.title)
      setContentError(res.data.content)
      setGeneralError(`${res.status} ${res.statusText}`)
    })
  }

  return (
    <main>
      {me && me.is_superuser && (
        <Form onSubmit={createPost} title="Create a Home Post">
          <SingleLineText name="title" placeholder="Enter post title here..." error={titleError} />
          <MultiLineText name="content" placeholder="Enter post content here..." error={contentError} />
          <SubmitButton label="Post" error={generalError} />
        </Form>
      )}

      {posts && posts.map((postData, i) => <Post me={me} data={postData} key={i} />)}
    </main>
  )
}
