import { useHistory } from "react-router-dom"
import { mutate } from "swr"
import { post } from "../utils/request"

import Form from "../components/articles/form"
import { SingleLineField } from "../components/input/fields"
import { SubmitButton } from "../components/input/buttons"

export default function LoginPage({ me }) {
  const history = useHistory()

  const logIn = (e) => {
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    post("/accounts/login/", loginData).then(res => {
      window.localStorage.setItem("token", res.data.token)
      mutate(["/accounts/me/", true])
      history.goBack()
    })
  }

  return (
    <main>
      <Form title="Log In" onSubmit={logIn}>
        <SingleLineField id="email" name="email" type="email" 
          placeholder="Enter your e-mail here..." label="E-mail" />

        <SingleLineField id="password" name="password" type="password" 
          placeholder="Enter your password here..." label="Password" />

        <SubmitButton label="Log In" />
      </Form>
    </main>
  )
}
