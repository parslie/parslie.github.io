import "./widget.scss";

function Widget({ title, children }) {
  return (
    <div className="widget">
      <header>
        <h3 className="title">{title}</h3>
      </header>
      <section>
        {children}
      </section>
    </div>
  );
}

export default Widget;
