import "./style.scss";
import { WordEntry } from "./components";
import { words } from "./data";

import Article from "../../components/article";
import { LinkButtonField } from "../../components/input";
import AccountButtons from "../../components/account";

function Header({ me }) {
  return (
    <header>
      <h1>jan Wito</h1>
      <LinkButtonField label="About" to="/" />
      <LinkButtonField label="Tasks" to="/tasks" />
      <AccountButtons me={me} />
      
      <h2>Toki Pona</h2>
      <LinkButtonField label="Dictionary" to="/tokipona" /> {/* TODO: Change path to /tokipona/dictionary */}
    </header>
  );
}

function Main({ me }) {
  const janMisaliLink = "https://www.youtube.com/c/HBMmaster";
  const sonaPiTokiPonaLink = "https://www.youtube.com/playlist?list=PLuYLhuXt4HrQIv3xnDxZqRaLfmxB2U5rJ";
  const janLentanLink = "https://devurandom.xyz/";
  const lipuSonaPonaLink = "https://devurandom.xyz/tokipona/";
  const officialSiteLink = "https://tokipona.org/";

  return (
    <main>
      <Article title="kama pona">
        <p>
          toki. mi jan Wito. tenpo lili la, mi kama sona e toki pona.
          taso, sona nimi mi li pona lili taso. tan ni la, mi pali e lipu nimi ni.
        </p>
        <p>
          <a href={officialSiteLink}>Toki Pona</a> is a language focused on simplicity.
          It has less than 200 words, which makes finding a way to express yourself fun and challenging. 
          I have been learning it through <a href={janMisaliLink}>jan Misali's</a> video 
          series <a href={sonaPiTokiPonaLink}>sona pi toki pona</a> and <a href={janLentanLink}>jan 
          Lentan's</a> online course <a href={lipuSonaPonaLink}>lipu sona pona</a>. I recommend these
          as a starting point if you are interested in learning.
        </p>
        <p>
          The grammar of Toki Pona has been fairly easy to learn, but the vocabulary has been more
          difficult. Since there's so few words, it's important to know what they all mean and how
          to use them. Therefore, I have created this dictionary, filled with definitions and examples,
          to improve my knowledge of them.
        </p>
        <p>
          Currently, I have only included words as they are defined in the official book. However, I will
          cross-reference this with other sources in the future, along with removing definitions that are
          redundant or duplicate (in my opinion).
        </p>
      </Article>
      <Article title="lipu nimi pu">
        {words.map((word, i) => <WordEntry key={i} data={word} />)}
      </Article>
    </main>
  );
}

const TokiPonaPage = ({ me }) => <><Header me={me} /><Main me={me} /></>;
export default TokiPonaPage;
