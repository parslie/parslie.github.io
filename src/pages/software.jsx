import { SoftwarePost } from "../components/articles/posts"

export default function SoftwarePage({ me }) {
  const mockSoftwareData = {
    title: "Title yay! Software!",
    content: "This is content. **wohoo!**",
    repository: "parslie/parslie.github.io",
    date: "2022-03-14T09:38:42.759059+01:00",
  }

  return (
    <main>
      <SoftwarePost data={mockSoftwareData} />
    </main>
  )
}
