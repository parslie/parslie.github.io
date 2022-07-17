import { Route, Switch } from "react-router-dom";
import useSWR from "swr";

import "./app.scss";
import AboutPage from "./pages/about/page";
import TaskPage from "./pages/tasks/page";
import TokiPonaPage from "./pages/tokipona/page";

function App() {
  const { data: me } = useSWR(["/account/me/", true]);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/"><AboutPage me={me} /></Route>
        <Route path="/tasks"><TaskPage me={me} /></Route>
        <Route path="/tokipona"><TokiPonaPage me={me} /></Route>
      </Switch>
    </div>
  );
}

export default App;
