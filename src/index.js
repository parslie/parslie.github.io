import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import useSWR, { SWRConfig } from "swr";
import { get } from "./utils/request";

import "./index.scss";
import AboutPage from "./components/about/page";

const swrOptions = { 
  fetcher: (endpoint, useToken, config = {}) => get(endpoint, useToken, config).then(res => res.data), 
  shouldRetryOnError: false,
};

function App() {
  const { data: me } = useSWR(["/account/me/", true]);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><AboutPage me={me} /></Route>
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrOptions}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
