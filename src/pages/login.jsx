import Form from "../components/articles/form"
import { SingleLineField, MultiLineField, SelectMenu } from "../components/input/fields"
import { Button, SubmitButton } from "../components/input/buttons"

export default function LoginPage({ me }) {
  const login = (e) => {
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    console.log(loginData)
  }

  return (
    <main>
      <Form title="Log In" onSubmit={login}>
        <SingleLineField id="email" name="email" type="email" 
          placeholder="Enter your e-mail here..." label="E-mail" />

        <SingleLineField id="password" name="password" type="password" 
          placeholder="Enter your password here..." label="Password" />

        <SubmitButton label="Log In" />
      </Form>
    </main>
  )
}
