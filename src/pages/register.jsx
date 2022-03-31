import { useHistory } from "react-router-dom"
import { mutate } from "swr"
import { post } from "../utils/request"

import Form from "../components/articles/form"
import { SingleLineField } from "../components/input/fields"
import { SubmitButton } from "../components/input/buttons"

export default function RegisterPage({ me }) {
  const history = useHistory()

  const register = (e) => {
    if (e.target.password.value === e.target.confirmation.value) {
      const registerData = {
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
      }
  
      post("/accounts/register/", registerData).then(res => {
        window.localStorage.setItem("token", res.data.token)
        mutate(["/accounts/me/", true])
        history.goBack()
      })
    }
  }

  return (
    <div className="articles">
      <Form title="Register" onSubmit={register}>
        <SingleLineField id="email" name="email" type="email" 
          placeholder="Enter your e-mail here..." label="E-mail" />

        <SingleLineField id="username" name="username" 
          placeholder="Enter your username here..." label="Username" />

        <SingleLineField id="password" name="password" type="password" 
          placeholder="Enter your password here..." label="Password" />
        <SingleLineField id="confirmation" name="confirmation" type="password" 
          placeholder="Confirm your password here..." label="Confirm Password" />

        <SubmitButton label="Log In" />
      </Form>
    </div>
  )
}
