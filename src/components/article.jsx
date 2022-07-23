import { useEffect, useState } from "react";

import "./article.scss";
import { ButtonField } from "./input";

function Article({ children, title }) {
  const [ collapsed, setCollapsed ] = useState(false);
  const collapsedKey = `${title.replace(" ", "").toLowerCase()}-collapsed`;

  useEffect(() => {
    const value = window.localStorage.getItem(collapsedKey) === "true";
    setCollapsed(value);
  }, [collapsedKey]);

  const toggleCollapsed = () => {
    window.localStorage.setItem(collapsedKey, !collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <div className="article-wrapper">
      <article>
        <header>
          <h1>{title}</h1>
          <ButtonField label={collapsed ? "Expand" : "Collapse"} onClick={toggleCollapsed} />
        </header>
        {!collapsed && <section>{children}</section>}
      </article>
    </div>
  );
}

export default Article;
