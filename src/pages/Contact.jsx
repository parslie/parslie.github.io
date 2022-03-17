import useSWR from "swr"

function ContactForm() {
  return (
    <article>
      <h1>Send a Message</h1>
    </article>
  )
}

function RestrictedContactForm() {
  return (
    <article>
      <h1>Send a Message to Parslie</h1>
    </article>
  )
}

function ContactMessage({ me, data }) {
  const isOwnMessage = me.username === data.sender.username // TODO: change to ID

  return (
    <article className={isOwnMessage ? "message sent" : "message received"}>
      <h3>
        Sent {isOwnMessage ? `to ${data.receiver.username}` : `from ${data.sender.username}`}
      </h3>
      <p>{data.content}</p>
    </article>
  )
}

function ContactPage({ me }) {
  const { data: messages } = useSWR(["/accounts/contact/", true])

  return (
    <main>
      {me ? (
        <>
          {me.is_superuser ? <ContactForm /> : <RestrictedContactForm />}
          {messages && messages.map((message, i) => <ContactMessage key={i} me={me} data={message} />)}
        </>
      ) : (
        <article>
          <h1>You need to be logged in to send a message.</h1>
        </article>
      )}
    </main>
  )
}

export default ContactPage
