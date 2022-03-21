import useSWR from "swr"

import { SoftwarePost } from "../components/articles/posts"

export default function SoftwarePage({ me }) {
  const { data: softwarePosts } = useSWR("/posts/software/")

  return (
    <main>
      {softwarePosts && softwarePosts.map(
        (postData, i) => <SoftwarePost key={i} data={postData} />
      )}
    </main>
  )
}
