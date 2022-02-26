import React from 'react'

import { SubmitButton } from '../components/input/button'
import { EmailInput, PasswordInput } from '../components/input/text'

function LoginPage({ me }) {

  const onLogin = (e) => {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    console.log(data)
    // TODO: send data
  }

  return (
    <React.Fragment>
      <article>
        <header>
          <h1>Log In</h1>
        </header>

        <form onSubmit={onLogin}>
          <EmailInput label='E-mail' name='email' placeholder='Enter e-mail adress here...' />
          <PasswordInput label='Password' name='password' placeholder='Enter password here...' />
          <SubmitButton label='Log In' />
        </form>
      </article>
    </React.Fragment>
  )
}

export default LoginPage
