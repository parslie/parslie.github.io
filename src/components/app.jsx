import { Switch, Route } from 'react-router-dom'

import useSWR, { mutate } from 'swr'

import LoginPage from '../pages/Login'
import SoftwarePage from '../pages/Software'
import RegisterPage from '../pages/Register'
import ProductivityPage from '../pages/Productivity'
import ContactPage from '../pages/Contact'

import '../styles/app.scss'
import { Button, LinkButton } from './input'

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
          <LinkButton to='/contact' title='Contact' />

          {me && me.is_superuser && (
            <>
              <LinkButton to='/productivity' title='Productivity' />
              <LinkButton to='/studies' title='Studies' />
            </>
          )}

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
        <Route path='/contact'>
            <ContactPage me={me} />
        </Route>
        <Route path='/studies'>

        </Route>
        <Route path='/productivity'>
          <ProductivityPage me={me} />
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
