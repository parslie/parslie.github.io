import { useState } from "react"
import { del } from "../utils/request"

import "../styles/articles.scss"
import "../styles/charts.scss"

import { Button } from "../components/buttons"
import { YesNoPrompt } from "../components/prompts"

export function ActionChart({ data }) {
  let bars = []

  // Generate bars for each day
  for (let day = 0; day < data.day_count; day++) {
    let durations = []
    let totalDuration = 0

    // Generate bar portions for categories
    data.types.forEach((type, i) => {
      const duration = type.durations[day]
      const color = type.color

      const duractionMins = duration / 60
      const tooltip = `Name: ${type.name}\nDuration: ${duractionMins.toFixed(2)} minutes`

      // Skip those that are too small to show
      if (duration > data.max_duration * 0.01) {
        totalDuration += duration
        durations.push(<div key={i} title={tooltip} className={"bar-portion " + color} style={{ flexGrow: duration }} />)
      }
    })
    durations.unshift(<div key={-1} style={{ flexGrow: data.max_duration - totalDuration }}></div>)

    bars.push(<div key={day} className="bar">{durations}</div>)
  }

  return (
    <article>
      <header>
        <h1>Minutes of Productivity per Day</h1>
      </header>
      <section>
        <div className="bar-chart">{bars}</div>
      </section>
    </article>
  )
}

export function ActionStart({ data }) {
  return (
    <div className="action-start">

    </div>
  )
}

export function ActionEntry({ data }) {
  const [ showDeletePrompt, setShowDeletePrompt ] = useState(false)

  const durationMins = Math.floor(data.duration / 60)
  const durationSecs = Math.floor(data.duration % 60)

  const deleteEntry = () => {
    del(`/productivity/entries/${data.id}/`, true).then(res => {
      setShowDeletePrompt(false)
    })
  }

  return ( 
    <>
      <div className="action-entry">
        <h3>{data.start_obj.type_obj.name} - {data.start_obj.description} - {durationMins}:{durationSecs}</h3>
        <div style={{ flexGrow: 1 }} />
        <Button label="Delete" onClick={() => setShowDeletePrompt(true)} />
      </div>

      {showDeletePrompt && <YesNoPrompt title={`Do you really want to delete "${data.start_obj.description}"?`} onYes={deleteEntry}
        onNo={() => setShowDeletePrompt(false)} />}
    </>
  )
}
