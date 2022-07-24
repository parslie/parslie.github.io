import Article from "../components/article";
import Widget from "../components/widget";

function ProjectEntry({ title, description, url }) {
  return (
    <Widget title={title}>
      <p>{description}</p>
      <p>View the repository <a href={url}>here</a>.</p>
    </Widget>
  );
}

function ProjectsPage({ me }) {
  return (
    <main>
      <Article title="Websites">
        <div className="widget-grid">
          <ProjectEntry title="parslie.github.io" url="https://www.github.com/parslie/parslie.github.io" 
            description="It's the website you're on right now. Currently unsure what its end goal is." />
        </div>
      </Article>
      <Article title="Tools">
        <div className="widget-grid">
          <ProjectEntry title="Robbe Robot" url="https://www.github.com/parslie/robbe-robot" 
            description="A discord bot made with python. It has some fun and useful commands." />
        </div>
      </Article>
    </main>
  );
}

export default ProjectsPage;
