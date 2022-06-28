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
    description: "long flexible thing",
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
  },{
    name: "musi",
    description: "art, entertainment",
    example: ["kalama musi ona li pona mute.", "their music is very good."]
  },{
    name: "mute",
    description: "quantity, very, many",
    example: ["kalama musi ona li pona mute.", "their music is very good."]
  },{
    name: "nanpa",
    description: "number, ordinal particle",
    example: ["ni li tenpo nanpa wan.", "this is the first time."]
  },{
    name: "nasa",
    description: "unusuality, craziness, intoxication",
    example: ["moku suli pi telo nasa li moli.", "large consumption of alcohol is deadly."]
  },{
    name: "nasin",
    description: "way, method, path",
    example: ["sina kepeken e nasin seme?", "which method did you use?"]
  },{
    name: "nena",
    description: "bump, hill, nose, button",
    example: ["nasin kiwen ni li nena.", "this stone path is bumpy."]
  },{
    name: "ni",
    description: "this, that",
    example: ["ni li ijo.", "this is a thing."]
  },{
    name: "nimi",
    description: "name, word",
    example: ["nimi sina li seme?", "what is your name?"]
  },{
    name: "noka",
    description: "foot, leg, organ of locomotion, bottom",
    example: ["sina ken tawa kepeken noka sina.", "you can walk using your legs."]
  },{
    name: "o",
    description: "vocative/imperative particle",
    example: ["jan Malijo o, sina wile ala wile kili?", "Mario, do you want mushrooms?"]
  },{
    name: "olin",
    description: "love, affection, compassion, respect",
    example: ["o olin e jan ante.", "respect different people."]
  },{
    name: "ona",
    description: "he, she, they, it",
    example: ["ona li tenpo pi moku sike.", "it's pizza time."]
  },{
    name: "open",
    description: "beginning, activation, opening",
    example: ["o open e lupa.", "open the door."]
  },{
    name: "pakala",
    description: "damage, mess",
    example: ["ilo mi li pakala.", "my tool is destroyed."]
  },{
    name: "pali",
    description: "action, work, creation",
    example: ["sina pali e seme?", "what are you doing?"]
  },{
    name: "palisa",
    description: "long hard thing",
    example: ["jan mute li jo e palisa.", "many people have long hard things."]
  },{
    name: "pan",
    description: "grain, bread, pasta",
    example: ["tenpo poka la, mi pali e pan mute.", "lately, i have been making a lot of bread."]
  },{
    name: "pana",
    description: "emission, putting, release, giving",
    example: ["mi pakala e ilo pi pana telo.", "i broke the sprinkler."]
  },{
    name: "pi",
    description: "of particle",
    example: ["ilo pi pana telo.", "tool of water emission."]
  },{
    name: "pilin",
    description: "heart, feeling",
    example: ["mi pilin ike ala li pilin pona ala.", "i feel okay."]
  },{
    name: "pimeja",
    description: "darkness, black",
    example: ["laso pimeja li kule pona.", "dark blue is a good color."]
  },{
    name: "pini",
    description: "end, completion",
    example: ["tenpo pini la, telo suwi li pona tawa mi.", "in the past, i liked soda."]
  },{
    name: "pipi",
    description: "bugs, insects, arachnids",
    example: ["pipi li ike a tawa mi.", "i really do not like spiders."]
  },{
    name: "poka",
    description: "hip, side, vicinity",
    example: ["ona li lon poka pi tomo esun.", "it is near the store."]
  },{
    name: "poki",
    description: "container",
    example: ["o pana e poki ilo tawa mi.", "give me the tool box."]
  },{
    name: "pona",
    description: "positivity, simplicity",
    example: ["ona li jan pona tawa mi.", "they are a good person in my opinion."]
  },{
    name: "pu",
    description: "the official toki pona book",
    example: ["lipu pu li lipu sewi pi mi mute.", "the official toki pona book is our bible."]
  },{
    name: "sama",
    description: "similarity, siblinghood",
    example: ["jan sama mi li lon tomo ante.", "my siblings live in different houses."]
  },{
    name: "seli",
    description: "fire, chemical reaction, heat source",
    example: ["telo pimeja ni li seli mute a.", "this coffee is too hot."]
  },{
    name: "selo",
    description: "outer layer, boundary",
    example: ["kala pi selo kiwen li lon.", "shell fish exist."]
  },{
    name: "seme",
    description: "what, which",
    example: ["nasin kepeken pi nimi seme li seme?", "how do you use the word seme?"]
  },{
    name: "sewi",
    description: "top, above, divinity",
    example: ["sina jo ala jo e nasin sewi?", "are you religious?"]
  },{
    name: "sijelo",
    description: "body, torso, physical state",
    example: ["sijelo mi li ike.", "i am sick."]
  },{
    name: "sike",
    description: "round or circular thing",
    example: ["jan Jesu, o kama jo e sike.", "Jesus, take the wheel."]
  },{
    name: "sin",
    description: "new, additional",
    example: ["mi wile pi ilo toki sin.", "i need a new phone."]
  },{
    name: "sina",
    description: "you",
    example: ["sina mi ala.", "you are not me."]
  },{
    name: "sinpin",
    description: "face, front, wall",
    example: ["mi kule e sinpin pi tomo lape.", "i am painting the bedroom walls."]
  },{
    name: "sitelen",
    description: "writing, image, representation",
    example: ["mi wile sona e sitelen pona.", "i want to know sitelen pona."]
  },{
    name: "sona",
    description: "knowledge, skill",
    example: ["mi sona sitelen kepeken sitelen pona.", "i know how to write using sitelen pona."]
  },{
    name: "soweli",
    description: "land mammal",
    example: ["soweli ni li tawa suli kepeken tenpo lili.", "that animal is moving fast."]
  },{
    name: "suli",
    description: "big, important, adult",
    example: ["telo suli li lete.", "the lake is cold."]
  },{
    name: "suno",
    description: "sun, light, light source",
    example: ["o lukin ala e suno.", "do not look at the sun."]
  },{
    name: "supa",
    description: "horizontal surface, thing to put something on",
    example: ["mi pana e telo pimeja sina lon supa.", "i put your coffee on the table."]
  },{
    name: "suwi",
    description: "sweet, cute",
    example: ["sina suwi a.", "you are so cute."]
  },{
    name: "suwi",
    description: "sweet, cute",
    example: ["kili mute li suwi.", "many fruit are sweet."]
  },{
    name: "tan",
    description: "by, from, because of",
    example: ["tan sina pi pali ni li seme?", "why are you doing this?"]
  },{
    name: "taso",
    description: "but, only",
    example: ["mi wile telo taso.", "i only want water."]
  },{
    name: "tawa",
    description: "movement, to, for, in the opinion of",
    example: ["mi pali e ni tawa sina a.", "i am doing this for you."]
  },{
    name: "telo",
    description: "water, liquid, beverage",
    example: ["mi wile tawa telo.", "i want to swim."]
  },{
    name: "tenpo",
    description: "time, duration",
    example: ["ona li tenpo musi.", "it is party time."]
  },{
    name: "toki",
    description: "speech, thought",
    example: ["mi ken toki kepeken toki pona.", "i can speak toki pona."]
  },{
    name: "tomo",
    description: "structure, home, indoor space",
    example: ["mi tawa tomo.", "i am going home."]
  },{
    name: "tu",
    description: "two",
    example: ["mi jo e kili tu.", "i have two fruit."]
  },{
    name: "unpa",
    description: "sex",
    example: ["unpa li ike tawa jan pi mute lili.", "some people do not like sex."]
  },{
    name: "uta",
    description: "mouth, lips, jaw",
    example: ["sijelo uta mi li ike.", "my jaw hurts."]
  },{
    name: "utala",
    description: "battle, challenge, competition",
    example: ["jan utala mute li lon poka mi.", "i have many warriors at my side."]
  },{
    name: "walo",
    description: "white, pale",
    example: ["telo walo pi telo pimeja wawa li pona.", "milk with strong coffee is good."]
  },{
    name: "wan",
    description: "one, unity, unique",
    example: ["mi tu li wan olin.", "we are married."]
  },{
    name: "waso",
    description: "winged animal, flying animal",
    example: ["waso li ilo lukin pi kulupu lawa.", "birds are spy tools for the government ."]
  },{
    name: "wawa",
    description: "strength, energy, confidence",
    example: ["telo pimeja la, telo wawa suwi li pona.", "energy drinks are tastier than coffee."]
  },{
    name: "weka",
    description: "absence, removal",
    example: ["o tawa weka.", "go away."]
  },{
    name: "wile",
    description: "need, desire",
    example: ["sina wile seme?", "what do you want?"]
  }
];

// TODO: cross reference pu with lipu sona pona
// TODO: change the description (maybe split into noun, adje, verb...)

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
