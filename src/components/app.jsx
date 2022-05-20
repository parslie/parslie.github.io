import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useSWR from "swr";

import "../styles/app.scss";
import { FormDemoPage, GraphDemoPage } from "../pages/demo";
import ActionPage from "../pages/action";

function NavButton({ to, label }) {
  const history = useHistory();
  return <button onClick={() => history.push(to)}>{label}</button>;
}

function AppHeader() {
  return (
    <header>
      <h1>Parslie</h1>
      <nav>
        <NavButton to="/" label="Home" />
        <NavButton to="/actions" label="Actions" />
        <h3>Demos</h3>
        <NavButton to="/demo/form" label="Forms" />
        <NavButton to="/demo/graph" label="Graphs" />
      </nav>
    </header>
  );
}

function AppContainer({ me }) {
  return (
    <Switch>
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
