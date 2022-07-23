import Article from "../components/article";
import { GridList, LabeledList } from "../components/list";

function AboutPage({ me }) {
  const languages = ["C", "C++", "C#", "CSS", "HTML", "Java", "Javascript", "Kotlin", "Lua", "Python"];

  return (
    <main>
      <Article title="Welcome!">
        <p>
          My name is Viktor Holta and I'm a software engineering student at Linköping 
          University in Sweden.
        </p> <p>
          If you need to contact me, you can reach me 
          at <a href="mailto:viktor.holta@outlook.com">viktor.holta@outlook.com</a>
        </p>
      </Article>
      <Article title="Programming Languages">
        <p>These are the programming languages that I feel comfortable working with.</p>
        <GridList items={languages} />
      </Article>
      <Article title="Work">
        <LabeledList title={"Datateknologsektionen @ Linköping University:"} items={[
          ["2021-2022", "Backend Developer @ WebbU"],
          ["2022-present", "Software Maintainer @ WebbU"],
        ]} />
      </Article>
      <Article title="School">
        <LabeledList items={[
          ["2016-2019", "Ljud- och Bildskolan (Audio and Visual School)"],
          ["2019-present", "Linköpings Universitet (Linköping Univeristy)"],
        ]} />
      </Article>
    </main>
  );
}

export default AboutPage;
