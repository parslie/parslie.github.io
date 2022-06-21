import { Route, Switch } from "react-router-dom";
import useSWR from "swr";

import "../styles/app.scss";

import { AboutHeader, AboutMain } from "./pages/about";
import { TokiPonaHeader, TokiPonaMain } from "./pages/tokipona";

export default function App() {
  const { data: me } = useSWR(["/account/me/", true]);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <AboutHeader me={me} />
          <AboutMain me={me} />
        </Route>
        <Route path="/tokipona">
          <TokiPonaHeader me={me} />
          <TokiPonaMain me={me} />
        </Route>
      </Switch>
    </div>
  );
}
