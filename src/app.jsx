import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import HomePage from './pages/home'
import SoftwarePage from './pages/software'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'

import './styles/app.scss'
import './styles/article.scss'

function App() {
  const me = undefined // TODO: fetch

  return (
    <div className='app'>
      <header>
        <h1>Parslie</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/software'>Software</Link>
          {me && me.is_superuser ? (
            <span>Log out as {me.username}</span>
          ) : (
            <React.Fragment>
              <Link to='/login'>Log in</Link>
              <Link to='/register'>Register</Link>
            </React.Fragment>
          )}
        </nav>
      </header>
      
      <main>
        <Switch>
          <Route exact path='/'>
            <HomePage me={me} />
          </Route>
          <Route path='/software'>
            <SoftwarePage me={me} />
          </Route>
          <Route path='/register'>
            <RegisterPage me={me} />
          </Route>
          <Route path='/login'>
            <LoginPage me={me} />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
