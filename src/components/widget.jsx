import "./widget.scss";

function Widget({ children, title, buttons }) {
  return (
    <div className="widget">
      <header>
        <h3 className="title">{title}</h3>
        {buttons}
      </header>
      <section>
        {children}
      </section>
    </div>
  );
}

export default Widget;
