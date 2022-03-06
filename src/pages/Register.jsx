import { useHistory } from 'react-router-dom'

import { mutate } from 'swr'
import { post } from '../utils/request'

import { Button, SingleLineField } from '../components/input'

function RegisterPage({ me }) {
  const history = useHistory()

  const register = (e) => {
    e.preventDefault()

    // TODO: handle input errors
    // TODO: see if autofill can be fixed
    if (e.target.password.value === e.target.confirmation.value) {
      const data = {
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
      }
  
      post('/accounts/register/', data).then(res => {
        window.localStorage.setItem('token', res.data.token)
        mutate(['/accounts/me/', true])
        history.goBack()
      })
    }
  }

  return (
    <main>
      <article>
        <h1>Register</h1>
        <form onSubmit={register}>
          <SingleLineField name='email' type='email' placeholder='Enter your e-mail here...' />
          <SingleLineField name='username' type='text' placeholder='Enter your username here...' />
          <SingleLineField name='password' type='password' placeholder='Enter your password here...' />
          <SingleLineField name='confirmation' type='password' placeholder='Confirm your password here...' />
          <Button type='submit' title='Register' />
        </form>
      </article>
    </main>
  )
}

export default RegisterPage
