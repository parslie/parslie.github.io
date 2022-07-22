import { secondsToText } from "../utils/string";
import "./barchart.scss";
import Widget from "./widget";

// TODO: make general (paired with data conversion functions)
function BarChart({ title, data }) {
  const maxDuration = 60 * 60 * 24;
  let bars = [];

  for (let i = 0; i < data.days.length; i++) {
    const day = data.days[i];
    const date = new Date(day.date);
    const tooltip = secondsToText(day.duration);
    let barSections= [];

    if (day.duration < maxDuration)
      barSections.push(<div style={{ flexGrow: maxDuration - day.duration }} />);
    if (day.duration > maxDuration * 0.01)
      barSections.push(<div className="bar-section" style={{ flexGrow: day.duration }} title={tooltip} />);
    barSections.push(<span className="bar-title">{date.toLocaleDateString("sv-SE")}</span>);

    bars.push(<div key={i} className="bar">{barSections}</div>);
  }

  return (
    <Widget title={title}>
      <div className="bar-chart">
        {bars}
      </div>
    </Widget>
  );
}

export default BarChart;
