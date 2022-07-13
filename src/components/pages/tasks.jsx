import AccountButtons from "../account";
import { LinkButtonField } from "../input";

export function TasksHeader({ me }) {
  return (
    <header>
      <h1>Viktor Holta</h1>
      <LinkButtonField to="/" label="About" />
      <LinkButtonField to="/tasks" label="Tasks" />
      <LinkButtonField to="/tokipona" label="Toki Pona" />
      <AccountButtons me={me} />
    </header>
  );
}

export function TasksMain({ me }) {
  return (
    <main>
      
    </main>
  );
}
