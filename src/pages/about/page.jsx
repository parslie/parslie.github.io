import "./style.scss";

import Article from "../../components/article";
import AppNavigation from "../../components/navigation";
import AppTitle from "../../components/title";

function Header({ me }) {
  return (
    <header>
      <AppTitle value="Viktor Holta" />
      <AppNavigation me={me} />
    </header>
  );
}

function Main({ me }) {
  const languages = ["C", "C++", "C#", "CSS", "HTML", "Java", "Javascript", "Kotlin", "Lua", "Python"];

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
        <p>These are the programming languages that I feel comfortable working with.</p>
        <div className="programming-languages">
          {languages.map(language => <span key={language}>{language}</span>)}
        </div>
      </Article>
      <Article title="Work">
        <div className="work-experiences">
          <span className="title">Datateknologsektionen @ Linköping University:</span>
          <span className="label">2021-2022</span>
          <span>Backend Developer @ WebbU</span>
          <span className="label">2022-present</span>
          <span>Software Maintainer @ WebbU</span>
        </div>
      </Article>
      <Article title="School">
        <div className="schools">
          <span className="label">2016-2019</span>
          <span>Ljud- och Bildskolan (Audio and Visual School)</span>
          <span className="label">2019-present</span>
          <span>Linköpings Universitet (Linköping Univeristy)</span>
        </div>
      </Article>
    </main>
  );
}

const AboutPage = ({ me }) => <><Header me={me} /><Main me={me} /></>;
export default AboutPage;
