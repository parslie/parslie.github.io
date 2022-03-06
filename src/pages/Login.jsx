import { useHistory } from 'react-router-dom'

import { mutate } from 'swr'
import { post } from '../utils/request'

import { Button, SingleLineField } from '../components/input'

function LoginPage({ me }) {
  const history = useHistory()

  const login = (e) => {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    // TODO: handle input errors
    post('/accounts/login/', data).then(res => {
      window.localStorage.setItem('token', res.data.token)
      mutate(['/accounts/me/', true])
      history.goBack()
    })
  }

  return (
    <main>
      <article>
        <h1>Log In</h1>
        <form onSubmit={login}>
          <SingleLineField name='email' type='email' placeholder='Enter your e-mail here...' />
          <SingleLineField name='password' type='password' placeholder='Enter your password here...' />
          <Button type='submit' title='Log in' />
        </form>
      </article>
    </main>
  )
}

export default LoginPage
