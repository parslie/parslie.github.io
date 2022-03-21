export function ActionBarChart({ data }) {
  let bars = []
  for (let i = 0; i < data.day_count; i++) {
    let durations = []
    let totalDuration = 0

    // Generate bar portions for categories
    for (let category of data.categories) {
      const duration = category.durations[i]
      const color = category.color
      const tooltip = `Name: ${category.name}\nDuration: ${duration / 60} minutes`

      if (duration !== 0) {
        totalDuration += duration
        durations.push(<div title={tooltip} className={"bar-portion " + color} style={{ flexGrow: duration }} />)
      }
    }
    durations.unshift(<div style={{ flexGrow: data.max_duration - totalDuration }}></div>)

    bars.push(<div className="bar">{durations}</div>)
  }

  return (
    <article>
      <h2>Minutes of Productivity per Day</h2>
      <div className="bar-chart">{bars}</div>
    </article>
  )
}
