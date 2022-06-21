import { useState } from "react";
import { mutate } from "swr";

import { post } from "../utils/request";

import Form from "./form";
import Prompt from "./prompt";
import { LinkButtonField, CombinationField, ButtonField, TextField, SubmitField } from "./input";

function LogOutPrompt({ setShowPrompt }) {
  const [ generalError, setGeneralError ] = useState("");

  const logOut = () => {
    post("/account/logout/", {}, true).then(res => {
      window.localStorage.removeItem("token");
      mutate(["/account/me/", true], undefined);
      setShowPrompt(false);
    }).catch(({ response: res }) => {
      setGeneralError(`${res.status} ${res.statusText}`);
    });
  };

  return (
    <Prompt title="Are you sure you want to log out?" onCancel={() => setShowPrompt(false)}>
      <CombinationField error={generalError}>
        <ButtonField label="Yes" onClick={logOut} />
        <ButtonField label="No" onClick={() => setShowPrompt(false)} />
      </CombinationField>
    </Prompt>
  );
}

function LogInPrompt({ setShowPrompt }) {
  const [ emailError, setEmailError ] = useState("");
  const [ passwordError, setPasswordError ] = useState("");
  const [ generalError, setGeneralError ] = useState("");

  const logIn = (e) => {
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    post("/account/login/", loginData).then(res => {
      window.localStorage.setItem("token", res.data.token);
      mutate(["/account/me/", true]);
      setShowPrompt(false);
    }).catch(({ response: res }) => {
      setEmailError(res.data.email);
      setPasswordError(res.data.password);
      setGeneralError(`${res.status} ${res.statusText}`);
    })
  };

  return (
    <Prompt title="Log In" onCancel={() => setShowPrompt(false)}>
      <Form onSubmit={logIn}>
        <TextField name="email" placeholder="Enter e-mail here..." type="email" error={emailError} />
        <TextField name="password" placeholder="Enter password here..." type="password" error={passwordError} />
        <SubmitField label="Log In" error={generalError} />
      </Form>
    </Prompt>
  );
}

function RegisterPrompt({ setShowPrompt }) {
  const [ emailError, setEmailError ] = useState("");
  const [ usernameError, setUsernameError ] = useState("");
  const [ passwordError, setPasswordError ] = useState("");
  const [ generalError, setGeneralError ] = useState("");

  const register = (e) => {
    const registerData = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    if (e.target.password.value === e.target.confirmation.value) {
      post("/account/register/", registerData).then(res => {
        window.localStorage.setItem("token", res.data.token);
        mutate(["/account/me/", true]);
        setShowPrompt(false);
      }).catch(({ response: res }) => {
        setEmailError(res.data.email);
        setUsernameError(res.data.username);
        setPasswordError(res.data.password);
        setGeneralError(`${res.status} ${res.statusText}`);
      })
    } else {
      setEmailError("");
      setUsernameError("");
      setPasswordError("The passwords need to match.");
      setGeneralError("");
    }
  };

  return (
    <Prompt title="Register" onCancel={() => setShowPrompt(false)}>
      <Form onSubmit={register}>
        <TextField name="email" placeholder="Enter e-mail here..." type="email" error={emailError} />
        <TextField name="username" placeholder="Enter username here..." error={usernameError} />
        <CombinationField error={passwordError}>
          <TextField name="password" placeholder="Enter password here..." type="password" />
          <TextField name="confirmation" placeholder="Confirm password here..." type="password" />
        </CombinationField>
        <SubmitField label="Register" error={generalError} />
      </Form>
    </Prompt>
  );
}

export default function AppHeader({ title, me }) {
  const [ showLogOutPrompt, setShowLogOutPrompt ] = useState(false);
  const [ showLogInPrompt, setShowLogInPrompt ] = useState(false);
  const [ showRegisterPrompt, setShowRegisterPrompt ] = useState(false);

  return (
    <header>
      <h1>{title}</h1>

      <LinkButtonField to="/" label="About" />

      {!me ? (
        <CombinationField>
          <ButtonField label="Log In" onClick={() => setShowLogInPrompt(true)} />
          <ButtonField label="Register" onClick={() => setShowRegisterPrompt(true)} />
        </CombinationField>
      ) : (
        <ButtonField label="Log Out" onClick={() => setShowLogOutPrompt(true)} />
      )}

      {showLogOutPrompt && <LogOutPrompt setShowPrompt={setShowLogOutPrompt} />}
      {showLogInPrompt && <LogInPrompt setShowPrompt={setShowLogInPrompt} />}
      {showRegisterPrompt && <RegisterPrompt setShowPrompt={setShowRegisterPrompt} />}
    </header>
  );
}
