import React from "react";
import "../../styles/pages/tokipona.scss"

import AccountButtons from "../account";
import { Article } from "../containers";
import { LinkButtonField } from "../input";

const words = [
  {
    name: "a",
    particles: ["emphasis", "emotion", "confirmation"],
    example: ["ona li suwi a.", "they are so cute."]
  },{
    name: "akesi",
    nouns: ["reptile", "amphibian"],
    example: ["akesi li jaki ala.", "reptiles are not gross."]
  },{
    name: "ala",
    adjectives: ["no", "not"],
    numbers: ["0"],
    example: ["mi moku ala.", "i am not eating."]
  },{
    name: "alasa",
    verbs: ["hunt", "forage"],
    example: ["alasa li musi.", "foraging is fun."]
  },{
    name: "ale/ali",
    nouns: ["abundance", "everything", "life", "universe"],
    adjectives: ["all", "abundant", "countless", "bountiful", "every", "plentiful"],
    numbers: ["100"],
    example: ["ale li pona.", "everything is good."]
  },{
    name: "anpa",
    adjectives: ["bowing down", "downward", "humble", "lowly", "dependent"],
    example: ["ona li lon anpa supa.", "it is under the table."]
  },{
    name: "ante",
    adjectives: ["different", "altered", "changed", "other"],
    example: ["mi ante e lipu mi.", "i am changing my website."]
  },{
    name: "anu",
    particles: ["or"],
    example: ["mi wile moku e telo pimeja anu telo walo.", "i want to drink coffee or milk."]
  },{
    name: "awen",
    adjectives: ["enduring", "kept", "protected", "safe", "waiting", "staying"],
    preverbs: ["continue to"],
    example: ["ilo li awen open.", "the machine is still on."]
  },{
    name: "e",
    particles: ["direct object marker"],
    example: ["soweli li moku e kasi e telo", "the cow is eating hay and drinking water."]
  },{
    name: "en",
    particles: ["subject marker"],
    example: ["jan en waso li ante.", "people and birds are different."]
  },{
    name: "esun",
    noun: ["market", "shop", "fair", "bazaar", "business transaction"],
    example: ["mi mute li wile tawa tomo esun.", "we need to go to the store."]
  },{
    name: "ijo",
    nouns: ["thing", "phenomenon", "object", "matter"],
    example: ["ijo ale li ijo.", "all things are things."]
  },{
    name: "ike",
    adjectives: ["bad", "negative", "non-essential", "irrelevant"],
    example: ["ona li jan pi ike mute.", "they are a very bad person."]
  },{
    name: "ilo",
    nouns: ["tool", "implement", "machine", "device"],
    example: ["sina jo e ilo nanpa, anu seme?", "you have a calculator, right?"]
  },{
    name: "insa",
    nouns: ["center", "content", "inside", "between", "internal organ", "stomach"],
    example: ["sina jo ala jo e insa lon insa sina?", "do you have internal organs inside you?"]
  },{
    name: "jaki",
    adjectives: ["disgusting", "obscene", "sickly", "toxic", "unclean", "unsanitary"],
    example: ["ni li jaki a.", "that is so disgusting."]
  },{
    name: "jan",
    nouns: ["human being", "person", "somebody"],
    example: ["jan mute li akesi ala.", "many people are not frogs."]
  },{
    name: "jelo",
    adjectives: ["yellow", "yellowish"],
    example: ["kasi jelo li pona lukin.", "yellow trees are pretty."]
  },{
    name: "jo",
    verbs: ["have", "carry", "contain", "hold"],
    example: ["o jo e luka mi.", "hold my hand."]
  },{
    name: "kala",
    nouns: ["fish", "marine animal", "sea creature"],
    example: ["kala li tawa telo weka.", "the fish are swimming away."]
  },{
    name: "kalama",
    verbs: ["produce a sound", "recite", "utter aloud"],
    example: ["sina li kalama mute tan seme?", "why are you so loud?"]
  },{
    name: "kama",
    adjectives: ["arriving", "coming", "future", "summoned"],
    preverbs: ["become", "manage to", "succeed in"],
    example: ["sijelo mi li kama pona.", "my health is getting better."]
  },{
    name: "kasi",
    nouns: ["plant", "vegetation", "herb", "leaf"],
    example: ["telo kasi li ike tawa ona.", "they do not like tea."]
  },{
    name: "ken",
    adjectives: ["possible"],
    preverbs: ["be able to", "be allowed to", "can", "may"],
    example: ["ken ale sina la, ken mi li pona.", "anything you can do i can do better."]
  },{
    name: "kepeken",
    prepositions: ["to use", "with", "by means of"],
    example: ["mi pali e moku ni kepeken ilo seli.", "i made this food using a stove."]
  },{
    name: "kili",
    nouns: ["fruit", "vegetable", "mushroom"],
    example: ["kili lili li suwi.", "berries are sweet."]
  },{
    name: "kiwen",
    nouns: ["hard object", "metal", "rock", "stone"],
    example: ["tomo ni li kasi kiwen.", "this house is wooden."]
  },{
    name: "ko",
    nouns: ["clay", "clinging form", "dough", "semi-solid", "paste", "powder"],
    example: ["o pana e ko pi telo pimeja tawa mi.", "give me the coffee powder."]
  },{
    name: "kon",
    nouns: ["air", "breath", "essence", "spirit", "hidden reality", "unseen agent"],
    example: ["ona li awen ala awen kon?", "are they still breathing?"]
  },{
    name: "kule",
    adjectives: ["colorful", "pigmented", "painted"],
    example: ["mi jan kule.", "i am a queer person."]
  },{
    name: "kulupu",
    nouns: ["community", "company", "group", "nation", "society", "tribe"],
    example: ["kulupu ni li suli mute.", "this community is very big."]
  },{
    name: "kute",
    nouns: ["ear"],
    verbs: ["hear", "listen", "pay attention to", "obey"],
    example: ["sina kute ala kute?", "are you listening?"]
  },{
    name: "la",
    particles: ["context marker"],
    example: ["mi la, kili palisa jelo li pona.", "personally, bananas are good."]
  },{
    name: "lape",
    adjectives: ["sleeping", "resting"],
    example: ["sina wile lape.", "you need to sleep."]
  },{
    name: "laso",
    adjectives: ["blue", "green"],
    example: ["ijo ni li laso.", "this thing is blue."]
  },{
    name: "lawa",
    nouns: ["head", "mind"],
    verbs: ["control", "direct", "guide", "lead", "own", "plan", "regulate", "rule"],
    example: ["jan lawa pi lipu ni li ike.", "the moderator of that site is bad."]
  },{
    name: "len",
    nouns: ["cloth", "clothing", "fabric", "textile", "cover", "layer of privacy"],
    example: ["o len e sina.", "cover yourself."]
  },{
    name: "lete",
    adjectives: ["cold", "cool", "uncooked", "raw"],
    example: ["sina seli li lete.", "you're hot and you're cold."]
  },{
    name: "li",
    particles: ["verb marker"],
    example: ["nimi li li nimi pi toki pona.", "the word li is a word of toki pona."]
  },{
    name: "lili",
    adjectives: ["little", "small", "short", "few", "a bit", "young"],
    example: ["ona li suwi lili.", "it is a little sweet."]
  },{
    name: "linja",
    nouns: ["long flexible thing", "cord", "hair", "rope", "thread", "yarn"],
    example: ["o pana e linja tawa mi.", "throw me the rope."]
  },{
    name: "lipu",
    nouns: ["flat object", "book", "document", "card", "paper", "record", "website"],
    example: ["lipu kule li pona tawa musi.", "colored paper is good for art."]
  },{
    name: "loje",
    adjectives: ["red", "reddish"],
    example: ["loje li kule pona.", "red is a good color."]
  },{
    name: "lon",
    prepositions: ["located at", "present at", "real", "true", "existing"],
    example: ["mi lon tomo mi.", "i am at my home."]
  },{
    name: "luka",
    nouns: ["arm", "hand", "tactile organ"],
    numbers: ["5"],
    example: ["o pini luka e mi.", "stop touching me."]
  },{
    name: "lukin",
    nouns: ["eye"],
    verbs: ["look at", "see", "examine", "observe", "read", "watch"],
    preverbs: ["seek", "look for", "try to"],
    example: ["mi lukin e lipu Halipota.", "i am reading harry Potter."]
  },{
    name: "lupa",
    nouns: ["door", "hole", "orifice", "window"],
    example: ["o open e lupa.", "open the door."]
  },{
    name: "ma",
    nouns: ["earth", "land", "outdoors", "world", "country", "territory", "soil"],
    example: ["sina kama tan ma seme?", "which country are you from?"]
  },{
    name: "mama",
    nouns: ["parent", "ancestor", "creator", "originator", "caretaker", "sustainer"],
    example: ["mama mama mi li pali e pan lili.", "my grandparent is making cookies."]
  },{
    name: "mani",
    nouns: ["money", "cash", "savings", "wealth", "large domesticated animal"],
    example: ["mi jo e mani pi mute ala.", "i do not have a lot of money."]
  },{
    name: "meli",
    nouns: ["woman", "female", "feminine person", "wife"],
    example: ["meli ni li mije.", "that woman is masculine."]
  },{
    name: "mi",
    nouns: ["i", "me", "we", "us"],
    example: ["mi moku.", "i am food."]
  },{
    name: "mije",
    nouns: ["man", "male", "masculine person", "husband"],
    example: ["mije ni li meli.", "that man is feminine."]
  },{
    name: "moku",
    verbs: ["eat", "drink", "consume", "swallow", "ingest"],
    example: ["sina moku.", "you are food."]
  },{
    name: "moli",
    adjectives: ["dead", "dying"],
    example: ["ona li moli lon musi Manka.", "they died in Minecraft."]
  },{
    name: "monsi",
    nouns: ["back", "behind", "rear"],
    example: ["ona li lon monsi sina.", "they are behind you."]
  },{
    name: "mu",
    particles: ["animal noise", "communication"],
    example: ["mi kute e mu wawa lon kulupu pi kasi suli.", "i heard a loud animal noise in the forest."]
  },{
    name: "mun",
    nouns: ["moon", "night sky object", "star"],
    example: ["tenpo mun ni li tenpo mun kule.", "this month is pride month."]
  },{
    name: "musi",
    adjectives: ["artistic", "entertaining", "frivolous", "playful", "recreational"],
    example: ["kalama musi ona li pona mute.", "their music is very good."]
  },{
    name: "mute",
    nouns: ["quantity"],
    adjectives: ["many", "a lot", "more", "much", "several", "very"],
    numbers: ["20"],
    example: ["kalama musi ona li pona mute.", "their music is very good."]
  },{
    name: "nanpa",
    nouns: ["numbers"],
    particle: ["ordinal marker"],
    example: ["ni li tenpo nanpa wan.", "this is the first time."]
  },{
    name: "nasa",
    adjectives: ["unusual", "strange", "foolish", "crazy", "drunk", "intoxication"],
    example: ["moku suli pi telo nasa li moli.", "large consumption of alcohol is deadly."]
  },{
    name: "nasin",
    nouns: ["way", "custom", "doctrine", "method", "path", "road"],
    example: ["sina kepeken e nasin seme?", "which method did you use?"]
  },{
    name: "nena",
    nouns: ["bump", "button", "hill", "mountain", "nose", "protuberance"],
    example: ["nasin kiwen ni li nena.", "this stone path is bumpy."]
  },{
    name: "ni",
    adjectives: ["that", "this"],
    example: ["ni li ijo.", "this is a thing."]
  },{
    name: "nimi",
    nouns: ["name", "word"],
    example: ["nimi sina li seme?", "what is your name?"]
  },{
    name: "noka",
    nouns: ["foot", "leg", "organ of locomotion", "bottom", "lower part"],
    example: ["sina ken tawa kepeken noka sina.", "you can walk using your legs."]
  },{
    name: "o",
    particle: ["vocative", "imperative"],
    example: ["jan Malijo o, sina wile ala wile kili?", "Mario, do you want mushrooms?"]
  },{
    name: "olin",
    verbs: ["love", "have compassion for", "respect", "show affection for"],
    example: ["o olin e jan ante.", "respect different people."]
  },{
    name: "ona",
    nouns: ["he", "she", "they", "it"],
    example: ["ona li tenpo pi moku sike.", "it's pizza time."]
  },{
    name: "open",
    verbs: ["begin", "start", "open", "turn on"],
    example: ["o open e lupa.", "open the door."]
  },{
    name: "pakala",
    adjectives: ["botched", "broken", "damaged", "harmed", "messed up"],
    example: ["ilo mi li pakala.", "my tool is destroyed."]
  },{
    name: "pali",
    verbs: ["do", "take action on", "work on", "build", "make", "prepare"],
    example: ["sina pali e seme?", "what are you doing?"]
  },{
    name: "palisa",
    nouns: ["long hard thing", "branch", "rod", "stick"],
    example: ["jan mute li jo e palisa.", "many people have long hard things."]
  },{
    name: "pan",
    nouns: ["cereal", "grain", "barley", "corn", "oat", "rice", "wheat", "bread", "pasta"],
    example: ["tenpo poka la, mi pali e pan mute.", "lately, i have been making a lot of bread."]
  },{
    name: "pana",
    verbs: ["give", "send", "emit", "provice", "put", "release"],
    example: ["mi pakala e ilo pi pana telo.", "i broke the sprinkler."]
  },{
    name: "pi",
    particles: ["of"],
    example: ["ilo pi pana telo.", "tool of water emission."]
  },{
    name: "pilin",
    nouns: ["heart (physical or emotional)"],
    adjectives: ["feeling (an emotion, a direct experience)"],
    example: ["mi pilin ike ala li pilin pona ala.", "i feel okay."]
  },{
    name: "pimeja",
    adjectives: ["black", "dark", "unlit"],
    example: ["laso pimeja li kule pona.", "dark blue is a good color."]
  },{
    name: "pini",
    adjectives: ["ago", "completed", "ended", "finished", "past"],
    example: ["tenpo pini la, telo suwi li pona tawa mi.", "in the past, i liked soda."]
  },{
    name: "pipi",
    nouns: ["bug", "insect", "ant", "spider"],
    example: ["pipi li ike a tawa mi.", "i really do not like spiders."]
  },{
    name: "poka",
    nouns: ["hip", "side", "next to", "nearby", "vicinity"],
    example: ["ona li lon poka pi tomo esun.", "it is near the store."]
  },{
    name: "poki",
    nouns: ["container", "bag", "bowl", "box", "cup", "cupboard", "drawer", "vessel"],
    example: ["o pana e poki ilo tawa mi.", "give me the tool box."]
  },{
    name: "pona",
    adjectives: ["good", "positive", "useful", "friendly", "peaceful", "simple"],
    example: ["ona li jan pona tawa mi.", "they are a good person in my opinion."]
  },{
    name: "pu",
    adjectives: ["interacting with the official Toki Pona book"],
    example: ["lipu pu li lipu sewi pi mi mute.", "the official toki pona book is our bible."]
  },{
    name: "sama",
    adjectives: ["same", "similar", "each other", "sibling", "peer", "fellow"],
    prepositions: ["as", "like"],
    example: ["jan sama mi li lon tomo ante.", "my siblings live in different houses."]
  },{
    name: "seli",
    adjectives: ["fire", "cooking element", "chemical reaction", "heat source"],
    example: ["telo pimeja ni li seli mute a.", "this coffee is too hot."]
  },{
    name: "selo",
    nouns: ["outer form", "outer layer", "bark", "peel", "shell", "skin", "boundary"],
    example: ["kala pi selo kiwen li lon.", "shell fish exist."]
  },{
    name: "seme",
    particles: ["what", "which"],
    example: ["nasin kepeken pi nimi seme li seme?", "how do you use the word seme?"]
  },{
    name: "sewi",
    nouns: ["area above", "highest part", "something elevated"],
    adjectives: ["awe-inspiring", "divine", "sacred", "supernatrual"],
    example: ["sina jo ala jo e nasin sewi?", "are you religious?"]
  },{
    name: "sijelo",
    nouns: ["body (of person or animal)", "physical state", "torso"],
    example: ["sijelo mi li ike.", "i am sick."]
  },{
    name: "sike",
    nouns: ["round or circular thing", "ball", "circle", "cycle", "sphere", "wheel"],
    adjectives: ["of one year"],
    example: ["jan Jesu, o kama jo e sike.", "Jesus, take the wheel."]
  },{
    name: "sin",
    adjectives: ["new", "fresh", "additional", "another", "extra"],
    example: ["mi wile pi ilo toki sin.", "i need a new phone."]
  },{
    name: "sina",
    nouns: ["you"],
    example: ["sina mi ala.", "you are not me."]
  },{
    name: "sinpin",
    nouns: ["face", "foremost", "front", "wall"],
    example: ["mi kule e sinpin pi tomo lape.", "i am painting the bedroom walls."]
  },{
    name: "sitelen",
    nouns: ["image", "picture", "representation", "symbol", "mark", "writing"],
    example: ["mi wile sona e sitelen pona.", "i want to know sitelen pona."]
  },{
    name: "sona",
    verbs: ["know", "be skilled in", "be wise about", "have information on"],
    preverbs: ["know how to"],
    example: ["mi sona sitelen kepeken sitelen pona.", "i know how to write using sitelen pona."]
  },{
    name: "soweli",
    nouns: ["animal", "beast", "land mammal"],
    example: ["soweli ni li tawa suli kepeken tenpo lili.", "that animal is moving fast."]
  },{
    name: "suli",
    adjectives: ["big", "heavy", "large", "long", "tall", "important", "adult"],
    example: ["telo suli li lete.", "the lake is cold."]
  },{
    name: "suno",
    nouns: ["sun", "light", "brightness", "glow", "radiance", "shine", "light source"],
    example: ["o lukin ala e suno.", "do not look at the sun."]
  },{
    name: "supa",
    nouns: ["horizontal surface", "thing to put or rest something on"],
    example: ["mi pana e telo pimeja sina lon supa.", "i put your coffee on the table."]
  },{
    name: "suwi",
    adjectives: ["sweet", "fragrant" ,"cute", "innocent", "adorable"],
    example: ["kili mute li suwi.", "many fruit are sweet."]
  },{
    name: "tan",
    prepositions: ["by", "from", "because of"],
    example: ["tan sina pi pali ni li seme?", "why are you doing this?"]
  },{
    name: "taso",
    adjectives: ["only"],
    particles: ["but", "however"],
    example: ["mi wile telo taso.", "i only want water."]
  },{
    name: "tawa",
    adjectives: ["moving"],
    prepositions: ["going to", "toward", "for", "from the perspective of"],
    example: ["mi pali e ni tawa sina a.", "i am doing this for you."]
  },{
    name: "telo",
    nouns: ["water", "liquid", "fluid", "wet substance", "beverage"],
    example: ["mi wile tawa telo.", "i want to swim."]
  },{
    name: "tenpo",
    nouns: ["time", "duration", "moment", "occasion", "period", "situation"],
    example: ["ona li tenpo musi.", "it is party time."]
  },{
    name: "toki",
    verbs: ["communicate", "say", "speak", "talk", "use language", "think"],
    example: ["mi ken toki kepeken toki pona.", "i can speak toki pona."]
  },{
    name: "tomo",
    nouns: ["indoor space", "building", "home", "house", "room"],
    example: ["mi tawa tomo.", "i am going home."]
  },{
    name: "tu",
    numbers: ["2"],
    example: ["mi jo e kili tu.", "i have two fruit."]
  },{
    name: "unpa",
    verbs: ["have sexual or marital relations with"],
    example: ["unpa li ike tawa jan pi mute lili.", "some people do not like sex."]
  },{
    name: "uta",
    nouns: ["mouth", "lips", "oral cavity", "jaw"],
    example: ["sijelo uta mi li ike.", "my jaw hurts."]
  },{
    name: "utala",
    verbs: ["battle", "challenge", "compete against", "struggle against"],
    example: ["jan utala mute li lon poka mi.", "i have many warriors at my side."]
  },{
    name: "walo",
    adjectives: ["white", "whitish", "light-colored", "pale"],
    example: ["telo walo pi telo pimeja wawa li pona.", "milk with strong coffee is good."]
  },{
    name: "wan",
    adjectives: ["unique", "united"],
    numbers: ["1"],
    example: ["mi tu li wan olin.", "we are married."]
  },{
    name: "waso",
    nouns: ["bird", "flying creature", "winged animal"],
    example: ["waso li ilo lukin pi kulupu lawa.", "birds are spy tools for the government ."]
  },{
    name: "wawa",
    adjectives: ["strong", "powerful", "confident", "sure", "energetic", "intense"],
    example: ["telo pimeja la, telo wawa suwi li pona.", "energy drinks are tastier than coffee."]
  },{
    name: "weka",
    adjectives: ["absent", "away", "ignored"],
    example: ["o tawa weka.", "go away."]
  },{
    name: "wile",
    preverbs: ["must", "need", "require", "should", "want", "wish"],
    example: ["sina wile seme?", "what do you want?"]
  }
];

// TODO: cross reference pu with lipu sona pona

export function TokiPonaHeader({ me }) {
  return (
    <header>
      <h1>jan Wito</h1>
      <LinkButtonField to="/" label="About" />
      <LinkButtonField to="/tasks" label="Tasks" />
      <LinkButtonField to="/tokipona" label="Toki Pona" />
      <AccountButtons me={me} />
    </header>
  );
}

export function TokiPonaMain({ me }) {
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

function WordEntry({ data }) {
  const listToText = (list) => {
    let text = "";
    for (let i = 0; i < list.length; i++)
      text += (i !== 0) ? `, ${list[i]}` : list[i];
    return text;
  };

  const partOfSpeech = (title, list) => {
    return (
      <span className="part-of-speech">
        <b>{title}:</b> {listToText(list)}
      </span>
    );
  }

  return (
    <div className="word-entry">
      <h2 className="title">{data.name}</h2>

      {data.particles && partOfSpeech("particles", data.particles)}
      {data.nouns && partOfSpeech("nouns", data.nouns)}
      {data.adjectives && partOfSpeech("adjectives", data.adjectives)}
      {data.verbs && partOfSpeech("verbs", data.verbs)}
      {data.preverbs && partOfSpeech("pre-verbs", data.preverbs)}
      {data.prepositions && partOfSpeech("prepositions", data.prepositions)}
      {data.numbers && partOfSpeech("numbers", data.numbers)}
      
      <span className="example">
        <b>example:</b> "{data.example[0]}" - "{data.example[1]}"
      </span>
    </div>
  );
}
