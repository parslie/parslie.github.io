import Article from "../components/article";
import { ButtonField } from "../components/input";
import { WidgetGrid } from "../components/list";
import Widget from "../components/widget";

function ProjectEntry({ title, description, url }) {
  const goToRepository = () => {
    window.open(url, "_blank").focus();
  };

  return (
    <Widget title={title} buttons={[<ButtonField label="Repository" onClick={goToRepository} />]}>
      <p>{description}</p>
    </Widget>
  );
}

function ProjectsPage({ me }) {
  return (
    <main>
      <Article title="Websites">
        <WidgetGrid>
          <ProjectEntry title="parslie.github.io" url="https://github.com/parslie/parslie.github.io" 
            description="It's the website you're on right now. Currently unsure what its end goal is." />
        </WidgetGrid>
      </Article>

      <Article title="Tools">
        <WidgetGrid>
          <ProjectEntry title="Robbe Robot" url="https://github.com/parslie/robbe-robot" 
            description="A discord bot made with python. It has some fun and useful commands." />
          <ProjectEntry title="Auxiliary Scripts" url="https://github.com/parslie/auxiliary-scripts" 
            description="A set of bash scripts that make certain terminal tasks easier." />
        </WidgetGrid>
      </Article>
    </main>
  );
}

export default ProjectsPage;
