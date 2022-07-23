import "./prompt.scss";

// TODO: create re-usable prompt elsewhere

function Prompt({ title, children, onCancel }) {
  return (
    <div className="prompt-wrapper">
      <div className="perimeter" onClick={onCancel} />
      <div className="prompt">
        <header><h1>{title}</h1></header>
        <section>{children}</section>
      </div>
    </div>
  );
}

export default Prompt;
