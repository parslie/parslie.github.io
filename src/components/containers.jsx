import "../styles/containers.scss";

export function Article({ title, children }) {
  return (
    <div className="article-wrapper">
      <article>
        {title && <header><h1>{title}</h1></header>}
        {children && <section>{children}</section>}
      </article>
    </div>
  );
}

export function Prompt({ title, children, onCancel }) {
  return (
    <div className="prompt-wrapper">
      <div className="perimeter" onClick={onCancel} />
      <div className="prompt">
        {title && <header><h1>{title}</h1></header>}
        {children && <section>{children}</section>}
      </div>
    </div>
  );
}
