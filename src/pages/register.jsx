import React from 'react'

import { SubmitButton } from '../components/input/button'
import { EmailInput, PasswordInput, SingleLineTextInput } from '../components/input/text'

function RegisterPage({ me }) {

  const onRegister = (e) => {
    e.preventDefault()

    if (e.target.confirmation.value === e.target.password.value) {
      const data = {
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
      }
  
      console.log(data)
      // TODO: send data
    }
  }

  return (
    <React.Fragment>
      <article>
        <header>
          <h1>Log In</h1>
        </header>

        <form onSubmit={onRegister}>
          <EmailInput label='E-mail' name='email' placeholder='Enter e-mail adress here...' />
          <SingleLineTextInput label='Username' name='username' placeholder='Enter username here...' />
          <PasswordInput label='Password' name='password' placeholder='Enter password here...' />
          <PasswordInput label='Confirm Password' name='confirmation' placeholder='Confirm password here...' />
          <SubmitButton label='Log In' />
        </form>
      </article>
    </React.Fragment>
  )
}

export default RegisterPage