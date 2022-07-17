import "./prompt.scss";

function Prompt({ title, children, onCancel }) {
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

export default Prompt;
