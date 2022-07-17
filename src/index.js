import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { get } from "./utils/request";

import "./index.scss";
import App from "./app";

const swrOptions = { 
  fetcher: (endpoint, useToken, config = {}) => get(endpoint, useToken, config).then(res => res.data), 
  shouldRetryOnError: false,
};

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrOptions}>
      <HashRouter>
        <App />
      </HashRouter>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
