import "../styles/grid.scss";

export function IconGrid({ icons=[] }) {
  return <div className="icon-grid">{icons.map(icon => icon)}</div>;
}

export function LabelGrid({ title, items=[] }) {
  return (
    <div className="label-grid">
      {title && <b className="title">{title}</b>}
      {items.map(([label, content]) => (
        <>
          <span className="label">{label}</span>
          <span className="item">{content}</span>
        </>
      ))}
    </div>
  );
}
