import { Route, Switch } from "react-router-dom"
import useSWR, { mutate } from "swr"

import "./app.scss"
import "./misc.scss"

import { LinkButton, Button } from "./components/input/buttons"

import HomePage from "./pages/home"
import SoftwarePage from "./pages/software"
import ContactPage from "./pages/contact"
import ProductivityPage from "./pages/productivity"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"

export default function App() {
  const { data: me } = useSWR(["/accounts/me/", true])

  const logOut = () => {
    window.localStorage.removeItem("token")
    mutate(["/accounts/me/", true], undefined)
  }
  

  return (
    <div className="app">
      <aside>
        <h1>Parslie</h1>
        <nav>
          <LinkButton to="/" label="Home" />
          <LinkButton to="/software" label="Software" />
          <LinkButton to="/contact" label="Contact" />
          <LinkButton to="/productivity" label="Productivity" />

          {me ? <Button label={`Log Out as ${me.username}`} onClick={logOut} /> : (
            <>
              <LinkButton to="/login" label="Log In" />
              <LinkButton to="/register" label="Register" />
            </>
          )}
        </nav>
      </aside>

      <main>
        <Switch>
          <Route exact path="/">
              <HomePage me={me} />
          </Route>
          <Route path="/software">
              <SoftwarePage me={me} />
          </Route>
          <Route path="/contact">
              <ContactPage me={me} />
          </Route>
          <Route path="/productivity">
              <ProductivityPage me={me} />
          </Route>
          <Route path="/login">
              <LoginPage me={me} />
          </Route>
          <Route path="/register">
              <RegisterPage me={me} />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
