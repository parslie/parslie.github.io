import { Route, Switch } from "react-router-dom"
import useSWR, { mutate } from "swr"

import "./styles/app.scss"
import "./styles/misc.scss"

import SoftwarePage from "./pages/software"

export default function App() {
  const { data: me } = useSWR(["/accounts/me/", true])

  const logOut = () => {
    window.localStorage.removeItem("token")
    mutate(["/accounts/me/", true], undefined)
  }

  return (
    <div className="app">
      <header>
        <h1>Parslie</h1>
      </header>

      <Switch>
        <Route path="/software">
          <SoftwarePage me={me} />
        </Route>
      </Switch>
    </div>
  )
}
