import "../styles/components/article.scss";

export default function Article({ children, title="" }) {
  return (
    <div className="article-wrapper">
      <article>
        {title && <header><h1>{title}</h1></header>}
        {children && <section>{children}</section>}
      </article>
    </div>
  );
}
