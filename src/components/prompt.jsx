import "../styles/components/prompt.scss";

export default function Prompt({ title, children, onCancel }) {
  // TODO: consider using Form instead of footer
  return (
    <div className="prompt-container">
      <div className="prompt-perimeter" onClick={onCancel} />
      <div className="prompt">
        {title && <header><h1>{title}</h1></header>}
        {children && <section>{children}</section>}
      </div>
    </div>
  );
}
