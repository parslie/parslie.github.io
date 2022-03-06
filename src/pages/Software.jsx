import useSWR from 'swr'
import SoftwarePost from '../components/posts/SoftwarePost'

function SoftwarePage({ me }) {
  const { data: posts } = useSWR('/posts/software/')

  const mockPostData = {
    id: 1,
    title: 'Mock Post',
    content: 'Wohoo! *This* is marked **up** mark**down** content.\r\n\r\nThis is a new line.',
    repository: 'parslie/parslie.github.io', // TODO: will be checked in the backend to make sure the repository exists
    date: '2022-02-25T22:49:34.687340Z',
  }

  return (
    <main>
      <SoftwarePost data={mockPostData} me={me} />
      <SoftwarePost data={mockPostData} me={me} />
      <SoftwarePost data={mockPostData} me={me} />
      <SoftwarePost data={mockPostData} me={me} />
      <SoftwarePost data={mockPostData} me={me} />
      <SoftwarePost data={mockPostData} me={me} />
      <SoftwarePost data={mockPostData} me={me} />
      <SoftwarePost data={mockPostData} me={me} />
      <SoftwarePost data={mockPostData} me={me} />
    </main>
  )
}

export default SoftwarePage
