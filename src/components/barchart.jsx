import "./barchart.scss";
import Widget from "./widget";

function BarChart({ title, data }) {
  let bars = [];
  for (let i = 0; i < data.length; i++) {
    const barData = data[i];
    let barSections = [];

    if (barData.percentage < 1)
      barSections.push(<div key={0} style={{ flexGrow: 1 - barData.percentage }} />);
    if (barData.percentage >= 0.01)
      barSections.push(<div key={1} className="bar-section" style={{ flexGrow: barData.percentage }} title={barData.tooltip} />);

    bars.push(<div key={i} className="bar">{barSections}</div>);
    bars.push(<span key={-(i+1)} className="bar-label">{barData.label}</span>);
  }

  // Makes sure bars are equally wide
  let style = { gridTemplateColumns: "" };
  for (let i = 0; i < data.length; i++)
    style.gridTemplateColumns += "1fr ";

  return (
    <Widget title={title}>
      <div className="bar-chart" style={style}>{bars}</div>
    </Widget>
  );
}

export default BarChart;
