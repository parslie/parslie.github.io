import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import useSWR, { mutate } from "swr";
import { post } from "../utils/request";

import "../styles/app.scss";
import { FormDemoPage, GraphDemoPage } from "../pages/demo";
import ActionPage from "../pages/action";
import AboutPage from "../pages/about";
import Prompt from "./prompt";
import Form from "./form";
import { ButtonField, SubmitField, TextField } from "./input";

function NavButton({ to, label }) {
  const history = useHistory();
  return <button onClick={() => history.push(to)}>{label}</button>;
}

function AppHeader({ me }) {
  const [ showLogOutPrompt, setShowLogOutPrompt ] = useState(false);
  const [ showLogInPrompt, setShowLogInPrompt ] = useState(false);
  const [ showRegisterPrompt, setShowRegisterPrompt ] = useState(false);

  const logOut = () => {
    post("/account/logout/", {}, true).then(res => {
      window.localStorage.removeItem("token");
      mutate(["/account/me/", true], undefined);
      setShowLogOutPrompt(false);
    }).catch(({ response: res }) => {
      // TODO: add error messages
    });
  };

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
      // TODO: add error messages
    })
  };

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
        // TODO: add error messages
      })
    } else {
      // TODO: add error message
    }
  };

  return (
    <header>
      <h1>Parslie</h1>
      <nav>
        <NavButton to="/" label="About" />
        {me && <button onClick={() => setShowLogOutPrompt(true)}>Log Out</button>}
        {!me && <button onClick={() => setShowLogInPrompt(true)}>Log In</button>}
        {!me && <button onClick={() => setShowRegisterPrompt(true)}>Register</button>}
        
        {showLogOutPrompt && (
          <Prompt title="Are you sure you want to log out?" onCancel={() => setShowLogOutPrompt(false)}>
            <Form>
              <ButtonField label="Yes" onClick={logOut} />
              <ButtonField label="No" onClick={() => setShowLogOutPrompt(false)} />
            </Form>
          </Prompt>
        )}
        
        {showLogInPrompt && (
          <Prompt title="Log In" onCancel={() => setShowLogInPrompt(false)}>
            <Form onSubmit={logIn}>
              <TextField name="email" placeholder="Enter e-mail here..." type="email" />
              <TextField name="password" placeholder="Enter password here..." type="password" />
              <SubmitField label="Log In" />
            </Form>
          </Prompt>
        )}
        
        {showRegisterPrompt && (
          <Prompt title="Register" onCancel={() => setShowRegisterPrompt(false)}>
            <Form onSubmit={register}>
              <TextField name="email" placeholder="Enter e-mail here..." type="email" />
              <TextField name="username" placeholder="Enter username here..." />
              <TextField name="password" placeholder="Enter password here..." type="password" />
              <TextField name="confirmation" placeholder="Confirm password here..." type="password" />
              <SubmitField label="Register " />
            </Form>
          </Prompt>
        )}

        {/*
        <h3>Apps</h3>
        <NavButton to="/actions" label="Actions" />
        <h3>Demos</h3>
        <NavButton to="/demo/form" label="Forms" />
        <NavButton to="/demo/graph" label="Graphs" />
        */}
      </nav>
    </header>
  );
}

function AppContainer({ me }) {
  return (
    <Switch>
      <Route exact path="/"><AboutPage me={me} /></Route>
      <Route path="/actions"><ActionPage me={me} /></Route>
      <Route path="/demo/form"><FormDemoPage /></Route>
      <Route path="/demo/graph"><GraphDemoPage /></Route>
    </Switch>
  );
}

export default function App() {
  const me = useSWR(["/account/me/", true]);

  return (
    <div className="app">
      <AppHeader me={me.data} />
      <AppContainer me={me.data} />
    </div>
  );
}
