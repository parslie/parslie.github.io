import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "../styles/app.scss";
import { FormDemoPage } from "../pages/demos";

function NavButton({ to, label }) {
  const history = useHistory();
  return <input type="button" value={label} onClick={() => history.push(to)} />;
}

function AppHeader() {
  return (
    <header>
      <h1>Parslie</h1>
      <nav>
        <NavButton to="/" label="Home" />
        <NavButton to="/actions" label="Actions" />
        <h3>Demos</h3>
        <NavButton to="/demo/form" label="Forms and Inputs" />
      </nav>
    </header>
  );
}

function AppContainer() {
  return (
    <Switch>
      <Route path="/demo/form"><FormDemoPage /></Route>
    </Switch>
  );
}

export default function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppContainer />
    </div>
  );
}
