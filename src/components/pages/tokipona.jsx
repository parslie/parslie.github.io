import AccountButtons from "../account";
import { LinkButtonField } from "../input";

export function TokiPonaHeader({ me }) {
  return (
    <header>
      <h1>jan Wito</h1>
      <LinkButtonField to="/" label="About" />
      <LinkButtonField to="/tokipona" label="Toki Pona" />
      <AccountButtons me={me} />
    </header>
  );
}

export function TokiPonaMain({ me }) {
  return (
    <main>

    </main>
  );
}
