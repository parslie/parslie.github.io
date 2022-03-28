import useSWR from "swr"

import Message from "../components/articles/message"
import Form from "../components/articles/form"
import { SubmitButton } from "../components/input/buttons"
import { MultiLineField } from "../components/input/fields"

function AdminContactPage({ me }) {
  const sendMessage = (e) => {

  }

  return (
    <main>
      <article className="test">

      </article>
      
      <Form title="Send a Message to {N/A}" onSubmit={sendMessage}>
        <MultiLineField id="msg" name="message" label="Message"
          placeholder="Enter a message here..." />
        <SubmitButton label="Send" />
      </Form>
    </main>
  )
}

function NormalContactPage({ me }) {
  const { data: messages } = useSWR(["/accounts/contact/", true])

  const sendMessage = (e) => {

  }

  return (
    <main>
      <Form title="Send a Message to Parslie" onSubmit={sendMessage}>
        <MultiLineField id="msg" name="message" label="Message"
          placeholder="Enter a message here..." />
        <SubmitButton label="Send" />
      </Form>

      {messages && messages.map((message, i) => <Message me={me} data={message} key={i} />)}
    </main>
  )
}

function NoContactPage() {
  return (
    <main>
      <article>
        <h2>You need to log in to send a message.</h2>
      </article>
    </main>
  )
}

export default function ContactPage({ me }) {
  if (!me)
    return <NoContactPage />
  else if (me.is_superuser)
    return <AdminContactPage me={me} />
  return <NormalContactPage me={me} />
}
