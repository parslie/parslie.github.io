import { useEffect, useState } from "react";

import "./article.scss";
import { ButtonField } from "./input";

function CollapsableArticle({ children, title }) {
  const [ collapsed, setCollapsed ] = useState(false);
  const id = title.replace(" ", "").toLowerCase();
  
  useEffect(() => {
    const value = window.localStorage.getItem(`${id}-collapsed`) === "true";
    setCollapsed(value);
  }, [id]);

  const toggleCollapsed = () => {
    window.localStorage.setItem(`${id}-collapsed`, !collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <div className="article-wrapper">
      <article>
        <header>
          {title && <h1>{title}</h1>}
          <ButtonField label={collapsed ? "Expand" : "Collapse"} onClick={toggleCollapsed} />
        </header>
        {!collapsed && <section>{children}</section>}
      </article>
    </div>
  );
}

function NonCollapsableArticle({ children, title }) {
  return (
    <div className="article-wrapper">
      <article>
        {title && <header><h1>{title}</h1></header>}
        <section>{children}</section>
      </article>
    </div>
  );
}

function Article({ children, title, collapsable=false }) {
  return collapsable 
    ? <CollapsableArticle title={title}>{children}</CollapsableArticle>
    : <NonCollapsableArticle title={title}>{children}</NonCollapsableArticle>;
}

export default Article;
