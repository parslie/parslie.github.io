import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import useSWR, { mutate } from "swr";
import { post } from "../utils/request";

import "../styles/app.scss";
import { FormDemoPage, GraphDemoPage } from "../pages/demo";
import ActionPage from "../pages/action";
import AboutPage from "../pages/about";
import Prompt from "./prompt";
import Form from "./form";
import { ButtonField, CombinationField, LinkButtonField, SubmitField, TextField } from "./input";

function LogOutPrompt({ setShowLogOutPrompt }) {
  const [ generalError, setGeneralError ] = useState("");

  const logOut = () => {
    post("/account/logout/", {}, true).then(res => {
      window.localStorage.removeItem("token");
      mutate(["/account/me/", true], undefined);
      setShowLogOutPrompt(false);
    }).catch(({ response: res }) => {
      setGeneralError(`${res.status} ${res.statusText}`);
    });
  };

  return (
    <Prompt title="Are you sure you want to log out?" onCancel={() => setShowLogOutPrompt(false)}>
      <Form>
        <CombinationField error={generalError}>
          <ButtonField label="Yes" onClick={logOut} />
          <ButtonField label="No" onClick={() => setShowLogOutPrompt(false)} />
        </CombinationField>
      </Form>
    </Prompt>
  );
}

function LogInPrompt({ setShowLogInPrompt }) {
  const [ emailError, setEmailError ] = useState();
  const [ passwordError, setPasswordError ] = useState();
  const [ generalError, setGeneralError ] = useState();

  const logIn = (e) => {
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    post("/account/login/", loginData).then(res => {
      window.localStorage.setItem("token", res.data.token);
      mutate(["/account/me/", true]);
      setShowLogInPrompt(false);
    }).catch(({ response: res }) => {
      setEmailError(res.data.email);
      setPasswordError(res.data.password);
      setGeneralError(`${res.status} ${res.statusText}`);
    })
  };

  return (
    <Prompt title="Log In" onCancel={() => setShowLogInPrompt(false)}>
      <Form onSubmit={logIn}>
        <TextField name="email" placeholder="Enter e-mail here..." type="email" error={emailError} />
        <TextField name="password" placeholder="Enter password here..." type="password" error={passwordError} />
        <SubmitField label="Log In" error={generalError} />
      </Form>
    </Prompt>
  );
}

function RegisterPrompt({ setShowRegisterPrompt }) {
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
        setShowRegisterPrompt(false);
      }).catch(({ response: res }) => {
        setEmailError(res.data.email);
        setUsernameError(res.data.username);
        setPasswordError(res.data.password);
        setGeneralError(`${res.status} ${res.statusText}`);
      })
    } else {
      setEmailError(undefined);
      setUsernameError(undefined);
      setPasswordError("The passwords need to match.");
      setGeneralError(undefined);
    }
  };
  
  return (
    <Prompt title="Register" onCancel={() => setShowRegisterPrompt(false)}>
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

export default function App() {
  const [ showLogOutPrompt, setShowLogOutPrompt ] = useState(false);
  const [ showLogInPrompt, setShowLogInPrompt ] = useState(false);
  const [ showRegisterPrompt, setShowRegisterPrompt ] = useState(false);
  const { data: me } = useSWR(["/account/me/", true]);

  return (
    <div className="app">
      <header>
        <h1>Parslie</h1>
        <LinkButtonField to="/" label="About" />
        {me && <ButtonField onClick={() => setShowLogOutPrompt(true)} label="Log Out" />}
        {!me && <ButtonField onClick={() => setShowLogInPrompt(true)} label="Log In" />}
        {!me && <ButtonField onClick={() => setShowRegisterPrompt(true)} label="Register" />}

        {/*
        <h3>Apps</h3>
        <LinkButtonField to="/actions" label="Actions" />
        <h3>Demos</h3>
        <LinkButtonField to="/demo/form" label="Forms" />
        <LinkButtonField to="/demo/graph" label="Graphs" />
        */}
        
        {showLogOutPrompt && <LogOutPrompt setShowLogOutPrompt={setShowLogOutPrompt} />}
        {showLogInPrompt && <LogInPrompt setShowLogInPrompt={setShowLogInPrompt} />}
        {showRegisterPrompt && <RegisterPrompt setShowRegisterPrompt={setShowRegisterPrompt} />}
      </header>

      <Switch>
        <Route exact path="/"><AboutPage me={me} /></Route>
        <Route path="/actions"><ActionPage me={me} /></Route>
        <Route path="/demo/form"><FormDemoPage /></Route>
        <Route path="/demo/graph"><GraphDemoPage /></Route>
      </Switch>
    </div>
  );
}
