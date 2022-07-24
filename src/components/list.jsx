import { Fragment } from "react";
import "./list.scss";

function GridList({ items }) {
  return (
    <div className="grid-list">
      {items && items.map((item, key) => <span key={key}>{item}</span>)}
    </div>
  );
}

function LabeledList({ title, items }) {
  return (
    <div className="labeled-list">
      {title && <span className="title">{title}</span>}
      {items && items.map((item, key) => (
        <Fragment key={key}>
          <span className="label">{item[0]}</span>
          <span className="content">{item[1]}</span>
        </Fragment>
      ))}
    </div>
  );
}

function WidgetGrid({ children }) {
  return <div className="widget-grid">{children}</div>;
}

export { GridList, LabeledList, WidgetGrid };
