import Article from "../components/article";
import { WidgetGrid } from "../components/list";
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

      <Article title="Social Media">
        <WidgetGrid>
          <ProjectEntry title="Outstanding" url="https://github.com/parslie/outstanding-app" 
            description="A social media app made with kotlin. It's currently on hiatus." />
        </WidgetGrid>
      </Article>
      
      <Article title="Video Games">
        <WidgetGrid>
          <ProjectEntry title="Voxelcraft" url="https://github.com/parslie/voxelcraft" 
            description="A Minecraft clone made with Unity. It's currently on hiatus." />
        </WidgetGrid>
      </Article>
    </main>
  );
}

export default ProjectsPage;
