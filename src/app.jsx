import { useState } from "react"
import { Route, Switch } from "react-router-dom"
import useSWR, { mutate } from "swr"

import "./styles/app.scss"
import "./styles/misc.scss"

import SoftwarePage from "./pages/software"
import { Button, LinkButton } from "./components/buttons"

export default function App() {
  const [ showLogIn, setShowLogIn ] = useState(false)
  const [ showRegister, setShowRegister ] = useState(false)
  const [ showLogOut, setShowLogOut ] = useState(false)
  const { data: me } = useSWR(["/accounts/me/", true])

  const logOut = () => {
    window.localStorage.removeItem("token")
    mutate(["/accounts/me/", true], undefined)
  }

  return (
    <div className="app">
      <header>
        <h1>Parslie</h1>
        <nav>
          <LinkButton to="" label="Home" />
          <LinkButton to="software" label="Software" />
          <LinkButton to="contact" label="Contact" />
          <LinkButton to="productivity" label="Productivity" />

          {me ? <Button label="Log Out" onClick={() => setShowLogOut(true)} /> : (
            <>
              <Button label="Log In" onClick={() => setShowLogIn(true)} />
              <Button label="Register" onClick={() => setShowRegister(true)} />
            </>
          )}
        </nav>
      </header>

      <Switch>
        <Route path="/software">
          <SoftwarePage me={me} />
        </Route>
      </Switch>
    </div>
  )
}
