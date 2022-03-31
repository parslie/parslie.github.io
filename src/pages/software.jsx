import { Post } from "../components/software"

export default function SoftwarePage({ me }) {
  const mockPostData = {
    id: 1,
    title: "test",
    content: "# asdasd\n\ntesting con***tent***!",
    repository: "parslie/parslie.github.io",
    date: "2022-03-06T18:34:27.184671+01:00",
  }

  return (
    <main>
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
