import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useSWR from "swr";

import "../styles/app.scss";
import { FormDemoPage, GraphDemoPage } from "../pages/demo";
import ActionPage from "../pages/action";
import AboutPage from "../pages/about";

function NavButton({ to, label }) {
  const history = useHistory();
  return <button onClick={() => history.push(to)}>{label}</button>;
}

function AppHeader() {
  return (
    <header>
      <h1>Parslie</h1>
      <nav>
        <NavButton to="/" label="About" />
        <h3>Apps</h3>
        <NavButton to="/actions" label="Actions" />
        <h3>Demos</h3>
        <NavButton to="/demo/form" label="Forms" />
        <NavButton to="/demo/graph" label="Graphs" />
      </nav>
    </header>
  );
}

// TODO: add separate pages for school and work descriptions
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
