import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { mutate } from 'swr'
import { post } from '../utils/request'

import { InputButton, InputField } from '../components/input'

function LoginPage({ me }) {
  const [ emailError, setEmailError ] = useState(null)
  const [ passwordError, setPasswordError ] = useState(null)
  const [ generalError, setGeneralError ] = useState(null)
  const history = useHistory()

  const onLogin = (e) => {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    post('/accounts/login/', data).then(res => {
      window.localStorage.setItem('token', res.data.token)
      history.push('/')
      mutate(['/accounts/me/', true])
    }).catch(({ response: res }) => {
      setEmailError(res.data.email ? res.data.email[0] : null)
      setPasswordError(res.data.password ? res.data.password[0] : null)
      setGeneralError(res.data.non_field_errors ? res.data.non_field_errors[0] : null)
    })
  }

  return (
    <React.Fragment>
      <article>
        <header>
          <h1>Log In</h1>
        </header>

        <form onSubmit={onLogin}>
          <InputField label='E-mail' error={emailError}>
            <input name='email' type='email' placeholder='Enter e-mail adress here...' />
          </InputField>
          <InputField label='Password' error={passwordError}>
            <input name='password' type='password' placeholder='Enter password here...' />
          </InputField>
          <InputButton label='Log In' isSubmit={true} error={generalError} />
        </form>
      </article>
    </React.Fragment>
  )
}

export default LoginPage
