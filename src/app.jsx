import { Route, Switch } from "react-router-dom"
import useSWR, { mutate } from "swr"

import "./styles/app.scss"
import "./styles/misc.scss"

export default function App() {
  const { data: me } = useSWR(["/accounts/me/", true])

  const logOut = () => {
    window.localStorage.removeItem("token")
    mutate(["/accounts/me/", true], undefined)
  }

  return (
    <div className="app">
      <header>
      </header>

      <main>
        <Switch>
        </Switch>
      </main>
    </div>
  )
}
