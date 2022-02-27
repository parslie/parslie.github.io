import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { mutate } from 'swr'

import { post } from '../utils/request'

import { InputButton, InputField } from '../components/input'

function RegisterPage({ me }) {
  const [ emailError, setEmailError ] = useState(null)
  const [ usernameError, setUsernameError ] = useState(null)
  const [ passwordError, setPasswordError ] = useState(null)
  const [ confirmationError, setConfirmationError ] = useState(null)
  const [ generalError, setGeneralError ] = useState(null)
  const history = useHistory()

  const onRegister = (e) => {
    e.preventDefault()

    if (e.target.confirmation.value === e.target.password.value) {
      const data = {
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
      }
  
      post('/accounts/register/', data).then(res => {
        window.localStorage.setItem('token', res.data.token)
        history.push('/')
        mutate(['/accounts/me/', true])
      }).catch(({ response: res }) => {
        setEmailError(res.data.email ? res.data.email[0] : null)
        setUsernameError(res.data.username ? res.data.username[0] : null)
        setPasswordError(res.data.password ? res.data.password[0] : null)
        setConfirmationError(res.data.password ? '\xa0' : null)
        setGeneralError(res.data.non_field_errors ? res.data.non_field_errors[0] : null)
      })
    }
    else {
      setEmailError(null)
      setUsernameError(null)
      setPasswordError('\xa0')
      setConfirmationError('The passwords do not match.')
      setGeneralError(null)
    }
  }

  return (
    <React.Fragment>
      <article>
        <header>
          <h1>Log In</h1>
        </header>

        <form onSubmit={onRegister}>
          <InputField label='E-mail' error={emailError}>
            <input name='email' type='email' placeholder='Enter e-mail adress here...' />
          </InputField>
          <InputField label='Username' error={usernameError}>
            <input name='username' type='text' placeholder='Enter username here...' />
          </InputField>
          <div className='row'>
            <InputField label='Password' error={passwordError}>
              <input name='password' type='password' placeholder='Enter password here...' />
            </InputField>
            <InputField label='Confirm Password' error={confirmationError}>
              <input name='confirmation' type='password' placeholder='Confirm password here...' />
            </InputField>
          </div>
          <InputButton label='Register' isSubmit={true} error={generalError} />
        </form>
      </article>
    </React.Fragment>
  )
}

export default RegisterPage