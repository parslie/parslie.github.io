import "../styles/app.scss";

function AppHeader() {
  return (
    <header>
      <h1>Parslie</h1>
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
