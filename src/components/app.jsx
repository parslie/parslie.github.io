import { Switch, Route } from 'react-router-dom'

import useSWR, { mutate } from 'swr'

import '../styles/app.scss'
import LoginPage from '../pages/Login'
import SoftwarePage from '../pages/Software'
import { Button, LinkButton } from './input'
import RegisterPage from '../pages/Register'

function App() {
  const { data: me } = useSWR(['/accounts/me/', true])

  const logout = () => {
    window.localStorage.removeItem('token')
    mutate(['/accounts/me/', true], null)
  }

  return (
    <div className='app'>
      <header>
        <h1>Parslie</h1>
        <nav>
          <LinkButton to='/' title='Home' />
          <LinkButton to='/software' title='Software' />
          {/*<LinkButton to='/studies' title='Studies' />*/}
          <LinkButton to='/contact' title='Contact' />

          {me ? <Button title={'Log Out as ' + me.username} onClick={logout} /> : (
            <>
              <LinkButton to='/login' title='Log In' />
              <LinkButton to='/register' title='Register' />
            </>
          )}
        </nav>
      </header>

      <Switch>
        <Route exact path='/'>

        </Route>
        <Route path='/software'>
            <SoftwarePage me={me} />
        </Route>
        <Route path='/studies'>

        </Route>
        <Route path='/contact'>
          
        </Route>
        <Route path='/login'>
          <LoginPage me={me} />
        </Route>
        <Route path='/register'>
          <RegisterPage me={me} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
