import { useHistory } from "react-router-dom";
import "../styles/app.scss";

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
      </nav>
    </header>
  );
}

function AppContainer() {
  return (
    <main>

    </main>
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
