import { HomePost } from "../components/articles/posts"

export default function HomePage({ me }) {
  const mockHomeData = {
    title: "Title yay! Home!",
    content: "This is content. **wohoo!**",
    date: "2022-03-14T09:38:42.759059+01:00",
  }

  return (
    <main>
      <HomePost data={mockHomeData} />
    </main>
  )
}
