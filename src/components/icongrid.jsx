import "../styles/icongrid.scss";

export default function IconGrid({ icons }) {
  return (
    <div className="icon-grid">{icons.map(icon => icon)}</div>
  );
}
