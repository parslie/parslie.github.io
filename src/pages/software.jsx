import useSWR, { mutate } from "swr"
import { post } from "../utils/request"

import { SoftwarePost } from "../components/articles/posts"
import Form from "../components/articles/form"
import { SingleLineField, MultiLineField } from "../components/input/fields"
import { SubmitButton } from "../components/input/buttons"

export default function SoftwarePage({ me }) {
  const { data: softwarePosts } = useSWR("/posts/software/")

  const createPost = (e) => {
    const data = {
      title: e.target.title.value,
      content: e.target.content.value,
      repository: `${e.target.repoOwner.value}/${e.target.repoName.value}`,
    }

    post('/posts/software/', data, true).then(res => {
      mutate('/posts/software/')
      e.target.reset()
    })
  }

  return (
    <main>
      {me && me.is_superuser && (
        <Form title="Create a Software Post" onSubmit={createPost}>
          <SingleLineField id="title" name="title" label="Title"
            placeholder="Enter post title here..." />
          <MultiLineField id="content" name="content" label="Content"
            placeholder="Enter post content here..." />
          <div className="row">
            <SingleLineField id="repoOwner" name="repoOwner" label="Repository"
              placeholder="Enter repository owner here..." />
            <span className="repository-divider">/</span>
            <SingleLineField id="repoName" name="repoName"
              placeholder="Enter repository name here..." />
          </div>
          <SubmitButton />
        </Form>
      )}

      {softwarePosts && softwarePosts.map(
        (postData, i) => <SoftwarePost key={i} data={postData} />
      )}
    </main>
  )
}
