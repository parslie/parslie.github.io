import { mutate } from "swr"
import { del, post } from "../../utils/request"

import { Button } from "../input/buttons"

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

export function ActionEntry({ data }) {
  const durationParsed = parseFloat(data.duration)
  const durationSec = Math.floor(durationParsed % 60)
  const durationMin = Math.floor(durationParsed / 60)
  const durationString = `${String(durationMin).padStart(2, "0")}:${String(durationSec).padStart(2, "0")}`

  const deleteAction = () => {
    del(`/productivity/entries/${data.id}/`, true).then(res => {
      mutate(["/productivity/entries/", true])
      mutate("/productivity/statistics/")
    })
  }

  return (
    <div className="action-entry row">
      <h4>
        {data.start_obj.category}
        <span> - </span>
        {data.start_obj.description}
        <span> - </span>
        {durationString}
      </h4>

      <div className="spacer" />
      <Button onClick={deleteAction} label="Delete" />
    </div>
  )
}

export function ActionStart({ data }) {
  const endAction = () => {
    post("/productivity/entries/", { start: data.id }, true).then(res => {
      mutate(["/productivity/starts/", true])
      mutate(["/productivity/entries/", true])
      mutate("/productivity/statistics/")
    })
  }

  const deleteAction = () => {
    del(`/productivity/starts/${data.id}/`, true).then(res => {
      mutate(["/productivity/starts/", true])
    })
  }

  return (
    <div className="action-start row">
      <h4>
        {data.category}
        <span> - </span>
        {data.description}
      </h4>

      <div className="spacer" />
      <Button onClick={endAction} label="End" />
      <Button onClick={deleteAction} label="Delete" />
    </div>
  )
}
