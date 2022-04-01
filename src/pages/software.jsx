import { useState } from "react"

import Form from "../components/form"
import { Post } from "../components/software"
import { MultiLineText, SingleLineText } from "../components/fields"
import { Button, SubmitButton } from "../components/buttons"

export default function SoftwarePage({ me }) {
  const mockPostData = {
    id: 1,
    title: "test",
    content: "# asdasd\n\ntesting con***tent***!",
    repository: "parslie/parslie.github.io",
    date: "2022-03-06T18:34:27.184671+01:00",
  }

  // TODO: remove debug above
  const [ titleError, setTitleError ] = useState("Test error")
  const [ contentError, setContentError ] = useState("Test content error")

  const createPost = (e) => {
    
  }

  return (
    <main>
      <Form onSubmit={createPost} title="Create a Software Post">
        <SingleLineText name="title" placeholder="Enter post title here..." error={titleError} />
        <MultiLineText name="content" placeholder="Enter post content here..." error={contentError} />
        <SubmitButton label="Post" />
      </Form>

      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
      <Post data={mockPostData} me={me} />
    </main>
  )
}
