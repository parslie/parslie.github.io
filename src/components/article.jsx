import "../styles/article.scss";

export default function Article({ children, title="" }) {
  return (
    <article>
      {title && <header><h1>{title}</h1></header>}
      {children && <section>{children}</section>}
    </article>
  );
}
