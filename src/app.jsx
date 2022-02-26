import { Link, Route, Switch } from 'react-router-dom'

import HomePage from './pages/home'
import SoftwarePage from './pages/software'

import './app.scss'

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Parslie</h1>
      </header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/software'>Software</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/software'>
            <SoftwarePage />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
