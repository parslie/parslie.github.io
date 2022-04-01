import { useState } from "react"

import useSWR, { mutate } from "swr"
import { post } from "../utils/request"

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
  const { data: posts } = useSWR("/posts/software/")

  const [ titleError, setTitleError ] = useState()
  const [ contentError, setContentError ] = useState()
  const [ repositoryError, setRepositoryError ] = useState()
  const [ generalError, setGeneralError ] = useState()

  const createPost = (e) => {
    const postData = {
      title: e.target.title.value,
      content: e.target.content.value,
      repository: `${e.target.repoOwner.value}/${e.target.repoName.value}`,
    }

    post("/posts/software/", postData, true).then(res => {
      e.target.reset()
      setTitleError("")
      setContentError("")
      setRepositoryError("")
      setGeneralError("")
      mutate("/posts/software/")
    }).catch(({ response: res }) => {
      setTitleError(res.data.title)
      setContentError(res.data.content)
      setRepositoryError(res.data.repository)
      setGeneralError(`${res.status} ${res.statusText}`)
    })
  }

  return (
    <main>
      <Form onSubmit={createPost} title="Create a Software Post">
        <SingleLineText name="title" placeholder="Enter post title here..." error={titleError} />
        <MultiLineText name="content" placeholder="Enter post content here..." error={contentError} />
        <SingleLineText name="repoOwner" placeholder="Enter repository owner here..." />
        <SingleLineText name="repoName" placeholder="Enter repository name here..."
           error={repositoryError} />
        <SubmitButton label="Post" error={generalError} />
      </Form>

      {posts && posts.map((postData, i) => <Post data={postData} key={i} />)}
    </main>
  )
}
