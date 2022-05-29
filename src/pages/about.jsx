import { SiC, SiCplusplus, SiCsharp, SiCss3, SiHtml5, SiJava, SiJavascript, SiKotlin, SiLua, SiPython } from "react-icons/si";
import Article from "../components/article";
import { IconGrid, LabelGrid } from "../components/grid";

export default function AboutPage({ me }) {
  const languageIcons = [
    <SiC title="C" />, <SiCplusplus title="C++" />, <SiCsharp title="C#" />, <SiCss3 title="CSS" />, 
    <SiHtml5 title="HTML" />, <SiJava title="Java" />, <SiJavascript title="Javascript" />, 
    <SiKotlin title="Kotlin" />, <SiLua title="Lua" />, <SiPython title="Python" />,
  ];

  return (
    <main>
      <Article title={me ? `Welcome, ${me.username}!` : "Welcome!"}>
        <p>
          My name is Viktor Holta and I'm a software engineering student at Linköping 
          University in Sweden.
        </p>
        <p>
          If you need to contact me, you can reach me 
          at <a href="mailto:viktor.holta@outlook.com">viktor.holta@outlook.com</a>.
        </p>
      </Article>

      <Article title="Programming Languages">
        <p>
          These are the programming languages that I feel comfortable working with. 
          You can hover over them to see their names.
        </p>
        <IconGrid icons={languageIcons} />
      </Article>

      <Article title="Work">
        <LabelGrid title="Datateknologsektionen @ Linköping University:"
          items={[
            ["2021-2022", "Backend Developer @ WebbU"],
            /*["2022-present", "Software Maintainer @ WebbU"],*/
          ]} />
      </Article>

      <Article title="School">
        <LabelGrid items={[
            ["2016-2019", "Ljud- och Bildskolan (Audio and Visual School)"],
            ["2019-present", "Linköpings University"],
          ]} />
      </Article>
    </main>
  );
}
