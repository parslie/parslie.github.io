import useSWR from "swr"

import { HomePost } from "../components/articles/posts"

export default function HomePage({ me }) {
  const { data: homePosts } = useSWR("/posts/home/")

  return (
    <div className="articles">
      {homePosts && homePosts.map(
        (postData, i) => <HomePost key={i} data={postData} />
      )}
    </div>
  )
}
