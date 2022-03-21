import { Route, Switch } from "react-router-dom"
import useSWR from "swr"

import "./app.scss"
import "./misc.scss"

import { LinkButton, Button } from "./components/input/buttons"

import HomePage from "./pages/home"
import SoftwarePage from "./pages/software"
import ProductivityPage from "./pages/productivity"
import LoginPage from "./pages/login"

export default function App() {
  const me = useSWR(["/accounts/me/", true])

  return (
    <div className="app">
      <aside>
        <h1>Parslie</h1>
        <nav>
          <LinkButton to="/" label="Home" />
          <LinkButton to="/software" label="Software" />
          <LinkButton to="/contact" label="Contact" />
          <LinkButton to="/productivity" label="Productivity" />

          {me ? <Button label="Log Out" /> : (
            <>
              <LinkButton to="/login" label="Log In" />
              <LinkButton to="/register" label="Register" />
            </>
          )}
        </nav>
      </aside>

      <Switch>
        <Route exact path="/">
            <HomePage me={me} />
        </Route>
        <Route path="/software">
            <SoftwarePage me={me} />
        </Route>
        <Route path="/productivity">
            <ProductivityPage me={me} />
        </Route>
        <Route path="/login">
            <LoginPage me={me} />
        </Route>
      </Switch>
    </div>
  )
}
