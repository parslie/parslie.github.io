import { Route, Switch } from "react-router-dom";
import useSWR from "swr";

import "./app.scss";
import AccountButtons from "./components/account";
import { LinkButtonField } from "./components/input";

import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import TasksPage from "./pages/tasks";
import TokiPonaPage from "./pages/tokipona";

function App() {
  const { data: me } = useSWR(["/accounts/me/", true]);

  return (
    <div className="app">
      <header>
        <Switch>
          <Route path="/tokipona"><h1 style={{ fontFamily: "linjapona" }}>jan [_wawa_ilo_tonsi_o]</h1></Route>
          <Route path="/"><h1>Viktor Holta</h1></Route>
        </Switch>

        <nav>
          <LinkButtonField label="About" to="/" />
          <LinkButtonField label="Projects" to="/projects" />

          <LinkButtonField label="Tasks" to="/tasks" />
          <LinkButtonField label="Toki Pona" to="/tokipona" />
          <AccountButtons me={me} />
        </nav>
      </header>

      <Switch>
        <Route path="/tokipona"><TokiPonaPage me={me} /></Route>
        <Route path="/tasks"><TasksPage me={me} /></Route>
        <Route path="/projects"><ProjectsPage me={me} /></Route>
        <Route path="/"><AboutPage me={me} /></Route>
      </Switch>
    </div>
  );
}

export default App;
