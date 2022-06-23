import React from "react";
import "../../styles/pages/tokipona.scss"

import AccountButtons from "../account";
import { Article } from "../containers";
import { LinkButtonField } from "../input";

const words = [
  {
    name: "a",
    description: "emphasis/emotion particle",
    example: ["ona li suwi a.", "they are so cute."]
  },{
    name: "akesi",
    description: "reptile, amphibian",
    example: ["akesi li jaki ala.", "reptiles are not gross."]
  },{
    name: "ala",
    description: "nothing",
    example: ["mi moku ala.", "i am not eating."]
  },{
    name: "alasa",
    description: "hunt, forage",
    example: ["alasa li musi.", "foraging is fun."]
  },{
    name: "ale/ali",
    description: "everything",
    example: ["ale li pona.", "everything is good."]
  },{
    name: "anpa",
    description: "downward, humility",
    example: ["ona li lon anpa supa.", "it is under the table."]
  },{
    name: "ante",
    description: "difference",
    example: ["mi ante e lipu mi.", "i am changing my website."]
  },{
    name: "anu",
    description: "or particle",
    example: ["mi wile moku e telo pimeja anu telo walo.", "i want to drink coffee or milk."]
  },{
    name: "awen",
    description: "safety, stability",
    example: ["ilo li awen open.", "the machine is still on."]
  },{
    name: "e",
    description: "object particle",
    example: ["soweli li moku e kasi e telo", "the cow is eating hay and drinking water."]
  },{
    name: "en",
    description: "subject particle",
    example: ["jan en waso li ante.", "people and birds are different."]
  },{
    name: "esun",
    description: "transaction",
    example: ["mi mute li wile tawa tomo esun.", "we need to go to the store."]
  },{
    name: "ijo",
    description: "thing",
    example: ["ijo ale li ijo.", "all things are things."]
  },{
    name: "ike",
    description: "negativity, irrelevance",
    example: ["ona li jan pi ike mute.", "they are a very bad person."]
  },{
    name: "ilo",
    description: "tool",
    example: ["sina jo e ilo nanpa, anu seme?", "you have a calculator, right?"]
  },{
    name: "insa",
    description: "inside, internal organ",
    example: ["sina jo ala jo e insa lon insa sina?", "do you have internal organs inside you?"]
  },{
    name: "jaki",
    description: "disgust",
    example: ["ni li jaki a.", "that is so disgusting."]
  },{
    name: "jan",
    description: "person",
    example: ["jan mute li akesi ala.", "many people are not frogs."]
  },{
    name: "jelo",
    description: "yellow",
    example: ["kasi jelo li pona lukin.", "yellow trees are pretty."]
  },{
    name: "jo",
    description: "have, hold",
    example: ["o jo e luka mi.", "hold my hand."]
  },{
    name: "kala",
    description: "marine animal",
    example: ["kala li tawa telo weka.", "the fish are swimming away."]
  },{
    name: "kalama",
    description: "sound",
    example: ["sina li kalama mute tan seme?", "why are you so loud?"]
  },{
    name: "kama",
    description: "arrival",
    example: ["sijelo mi li kama pona.", "my health is getting better."]
  },{
    name: "kasi",
    description: "plant, herb",
    example: ["telo kasi li ike tawa ona.", "they do not like tea."]
  },{
    name: "ken",
    description: "ability",
    example: ["ken ale sina la, ken mi li pona.", "anything you can do i can do better."]
  },{
    name: "kepeken",
    description: "use",
    example: ["mi pali e moku ni kepeken ilo seli.", "i made this food using a stove."]
  },{
    name: "kili",
    description: "fruit, vegetable, mushroom",
    example: ["kili lili li suwi.", "berries are sweet."]
  },{
    name: "kiwen",
    description: "solidity, stone, metal",
    example: ["tomo ni li kasi kiwen.", "this house is wooden."]
  },{
    name: "ko",
    description: "semi-solidity, clay, powder",
    example: ["o pana e ko pi telo pimeja tawa mi.", "give me the coffee powder."]
  },{
    name: "kon",
    description: "gas, spirit, invisibility",
    example: ["ona li awen ala awen kon?", "are they still breathing?"]
  },{
    name: "kule",
    description: "color, queer",
    example: ["mi jan kule.", "i am a queer person."]
  },{
    name: "kulupu",
    description: "group",
    example: ["kulupu ni li suli mute.", "this community is very big."]
  },{
    name: "kute",
    description: "ear, attention",
    example: ["sina kute ala kute?", "are you listening?"]
  },{
    name: "la",
    description: "context particle",
    example: ["mi la, kili palisa jelo li pona.", "personally, bananas are good."]
  },{
    name: "lape",
    description: "sleep, rest",
    example: ["sina wile lape.", "you need to sleep."]
  },{
    name: "laso",
    description: "grue",
    example: ["ijo ni li laso.", "this thing is blue."]
  },{
    name: "lawa",
    description: "head, control",
    example: ["jan lawa pi lipu ni li ike.", "the moderator of that site is bad."]
  },{
    name: "len",
    description: "cloth, cover",
    example: ["o len e sina.", "cover yourself."]
  },{
    name: "lete",
    description: "cold, raw",
    example: ["sina seli li lete.", "you're hot and you're cold."]
  },{
    name: "li",
    description: "verb particle",
    example: ["nimi li li nimi pi toki pona.", "the word li is a word of toki pona."]
  },{
    name: "lili",
    description: "little, few, young",
    example: ["ona li suwi lili.", "it is a little sweet."]
  },{
    name: "linja",
    description: "long and flexible thing",
    example: ["o pana e linja tawa mi.", "throw me the rope."]
  },{
    name: "lipu",
    description: "flat thing, book, document, website",
    example: ["lipu kule li pona tawa musi.", "colored paper is good for art."]
  },{
    name: "loje",
    description: "red",
    example: ["loje li kule pona.", "red is a good color."]
  },{
    name: "lon",
    description: "existence, truth",
    example: ["mi lon tomo mi.", "i am at my home."]
  },{
    name: "luka",
    description: "hand, five, touch",
    example: ["o pini luka e mi.", "stop touching me."]
  },{
    name: "lukin",
    description: "sight, read",
    example: ["mi lukin e lipu Halipota.", "i am reading harry Potter."]
  },{
    name: "lupa",
    description: "door, window, hole",
    example: ["o open e lupa.", "open the door."]
  },{
    name: "ma",
    description: "place, earth, outdoors",
    example: ["sina kama tan ma seme?", "which country are you from?"]
  },{
    name: "mama",
    description: "parent, ancestor, caretaker, creator",
    example: ["mama mama mi li pali e pan lili.", "my grandparent is making cookies."]
  },{
    name: "mani",
    description: "money, large domesticated animal",
    example: ["mi jo e mani pi mute ala.", "i do not have a lot of money."]
  },{
    name: "meli",
    description: "female, woman, femininity, wife",
    example: ["meli ni li mije.", "that woman is masculine."]
  },{
    name: "mi",
    description: "me",
    example: ["mi moku.", "i am food."]
  },{
    name: "mije",
    description: "male, man, masculinity, husband",
    example: ["mije ni li meli.", "that man is feminine."]
  },{
    name: "moku",
    description: "food, consumption",
    example: ["sina moku.", "you are food."]
  },{
    name: "moli",
    description: "death",
    example: ["ona li moli lon musi Manka.", "they died in Minecraft."]
  },{
    name: "monsi",
    description: "back, behind",
    example: ["ona li lon monsi sina.", "they are behind you."]
  },{
    name: "mu",
    description: "animal noise/communication particle",
    example: ["mi kute e mu wawa lon kulupu pi kasi suli.", "i heard a loud animal noise in the forest."]
  },{
    name: "mun",
    description: "moon, star, night sky object",
    example: ["tenpo mun ni li tenpo mun kule.", "this month is pride month."]
  }
];

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

      <Article title="lipu nimi pu">
        <div className="word-list">
          {words.map((word, i) => <WordEntry key={i} data={word} />)}
        </div>
      </Article>
    </main>
  );
}

function WordEntry({ data }) {
  return (
    <>
      <span className="name">{data.name}</span>
      <span className="description">{data.description}</span>
      <span className="example">"{data.example[0]}" - "{data.example[1]}"</span>
    </>
  );
}
