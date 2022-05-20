import "../styles/graph.scss";

export function ActionBarChart({ data }) {
  let barList = [];

  // Create bars
  for (let day = 0; day < data.day_count; day++) {
    let barSectionList = [];
    let remainingDuration = data.max_duration;

    // Create bar sections
    for (let cIndex = 0; cIndex < data.categories.length; cIndex++) {
      const category = data.categories[cIndex];
      const sectionDuration = category.durations[day];

      if (sectionDuration !== 0) {
        let sectionClass = `bar-section ${category.color}`;
        if (barSectionList.length === 0)
          sectionClass += " first";
  
        remainingDuration -= sectionDuration;
        barSectionList.push(<div className={sectionClass} style={{ flexGrow: sectionDuration }} key={category.id}></div>);
      }
    }
    if (remainingDuration !== 0)
      barSectionList.unshift(<span style={{ flexGrow: remainingDuration }} key={-1} />);

    barList.push(<div className="bar"  key={day}>{barSectionList}</div>);
  }

  return <div className="bar-chart">{barList}</div>;
}
