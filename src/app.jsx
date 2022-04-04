import { useState } from "react"
import { Route, Switch } from "react-router-dom"
import useSWR, { mutate } from "swr"
import { post } from "./utils/request"

// TODO: separate article components/styles & element components/styles
import "./styles/app.scss"
import "./styles/misc.scss"

import HomePage from "./pages/home"
import SoftwarePage from "./pages/software"
import ProductivityPage from "./pages/productivity"

import { Button, LinkButton, SubmitButton } from "./components/buttons"
import { FormPrompt, YesNoPrompt } from "./components/prompts"
import { SingleLineText } from "./components/fields"

export default function App() {
  const [ showLogIn, setShowLogIn ] = useState(false)
  const [ showRegister, setShowRegister ] = useState(false)
  const [ showLogOut, setShowLogOut ] = useState(false)
  const { data: me } = useSWR(["/accounts/me/", true])

  const logOut = () => {
    window.localStorage.removeItem("token")
    mutate(["/accounts/me/", true], undefined)
    setShowLogOut(false)
  }

  const logIn = (e) => {
    const postData = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    post("/accounts/login/", postData).then(res => {
      window.localStorage.setItem("token", res.data.token)
      mutate(["/accounts/me/", true])
      setShowLogIn(false) 
    }).catch(({ response: res }) => {
      // TODO
    })
  }

  const register = (e) => {
    if (e.target.password.value === e.target.confirmation.value) {
      const postData = {
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
      }

      post("/accounts/register/", postData).then(res => {
        window.localStorage.setItem("token", res.data.token)
        mutate(["/accounts/me/", true])
        setShowRegister(false)
      }).catch(({ response: res }) => {
        // TODO
      })
    }
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

          {me ? <Button label={"Log Out as " + me.username} onClick={() => setShowLogOut(true)} /> : (
            <>
              <Button label="Log In" onClick={() => setShowLogIn(true)} />
              <Button label="Register" onClick={() => setShowRegister(true)} />
            </>
          )}
        </nav>
      </header>

      <Switch>
        <Route exact path="/"><HomePage me={me} /></Route>
        <Route path="/software"><SoftwarePage me={me} /></Route>
        <Route path="/productivity"><ProductivityPage me={me} /></Route>
      </Switch>

      {showLogOut && <YesNoPrompt title="Do you really want to log out?" 
        onNo={() => setShowLogOut(false)} onYes={logOut} />}
      {showLogIn && (
        <FormPrompt title="Log In" onCancel={() => setShowLogIn(false)} onSubmit={logIn}>
          <SingleLineText name="email" placeholder="Enter your e-mail here" type="email" />
          <SingleLineText name="password" placeholder="Enter your password here" type="password" />
          <SubmitButton label="Log In" />
        </FormPrompt>
      )}
      {showRegister && (
        <FormPrompt title="Register" onCancel={() => setShowRegister(false)} onSubmit={register}>
        <SingleLineText name="email" placeholder="Enter your e-mail here" type="email" />
          <SingleLineText name="username" placeholder="Enter your username here" type="text" />
          <SingleLineText name="password" placeholder="Enter your password here" type="password" />
          <SingleLineText name="confirmation" placeholder="Confirm your password here" type="password" />
          <SubmitButton label="Log In" />
        </FormPrompt>
      )}
    </div>
  )
}
