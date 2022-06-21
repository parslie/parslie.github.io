import AccountButtons from "../account";
import { Article } from "../containers";
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
  const channelLink = "https://www.youtube.com/c/HBMmaster";
  const videoLink = "https://www.youtube.com/watch?v=2EZihKCB9iw&list=PLuYLhuXt4HrQwIDV7FBkA8zApw0pnEJrX&index=1";
  const officialSiteLink = "https://devurandom.xyz/tokipona/";

  return (
    <main>
      <Article title="kama pona">
        <p>
          toki. mi jan Wito. tenpo lili la, mi kama sona e toki pona.
          taso sona nimi mi li pona lili. tan ni la, mi pali e lipu nimi ni.
        </p>
        <p>
          Toki Pona is a conlang made by Sonja Lang in 2001. I was introduced to it through 
          a <a href={videoLink}>video</a> by <a href={channelLink}>jan Misali</a> around 
          the start of 2022. Since then, I've been casually learning it. 
          There's a lot of great sources on the <a href={officialSiteLink}>official site</a>.
        </p>
        <p>
          The grammar has been fairly easy to learn, but I don't feel comfortable speaking it 
          yet. I want to get better, so I'm starting by creating a dictionary to improve my 
          vocabulary.
        </p>
      </Article>

      <Article title="lipu nimi">
        
      </Article>
    </main>
  );
}
