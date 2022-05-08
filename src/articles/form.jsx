import "../styles/article.scss";

export default function FormArticle({ title, children, onSubmit }) {
  const preSubmit = (e) => {
    e.preventDefault();
    if (onSubmit)
      onSubmit();
  };

  return (
    <article>
      <header><h1>{title}</h1></header>
      <section>
        <form onSubmit={preSubmit}>
          {children}
        </form>
      </section>
    </article>
  );
}
