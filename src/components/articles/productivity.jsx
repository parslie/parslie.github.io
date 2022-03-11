import { useEffect, useRef } from "react"

import useSWR, { mutate } from "swr"
import { del, post } from "../../utils/request"

import { Button } from "../input"


export function ActionStart({ data }) {
  const endAction = () => {
    // TODO: handle errors
    post("/productivity/entries/", { start: data.id }, true).then(res => {
      mutate(["/productivity/starts/", true])
      mutate(["/productivity/entries/", true])
      mutate(["/productivity/statistics/", true])
    })
  }

  const deleteAction = () => {
    // TODO: handle errors
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
      <Button onClick={endAction} title="End" />
      <Button onClick={deleteAction} title="Delete" />
    </div>
  )
}


export function ActionEntry({ data }) {
  const durationParsed = parseFloat(data.duration)
  const durationSec = Math.floor(durationParsed % 60)
  const durationMin = Math.floor(durationParsed / 60)
  const durationString = `${String(durationMin).padStart(2, "0")}:${String(durationSec).padStart(2, "0")}`

  const deleteAction = () => {
    // TODO: handle errors
    del(`/productivity/entries/${data.id}/`, true).then(res => {
      mutate(["/productivity/entries/", true])
      mutate(["/productivity/statistics/", true])
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
      <Button onClick={deleteAction} title="Delete" />
    </div>
  )
}


function drawMonthStatsLine(context, x, y, width, height, monthStats) {
  const dayInterval = width / 29
  const minuteInterval = height / 180 

  context.beginPath()

  monthStats.forEach((dayStats, i) => {
    let totalDurationSec = 0
    Object.values(dayStats).map(duration => totalDurationSec += duration)
    let totalDurationMin = totalDurationSec / 60
    
    if (i === 0)
      context.moveTo(x, totalDurationMin * minuteInterval + y)
    else {
      context.lineTo(i * dayInterval + x, totalDurationMin * minuteInterval + y)
    }
  })

  context.strokeStyle = "#000"
  context.stroke()
}

function drawBackgroundLines(context, x, y, width, height) {
  const xInterval = width / 29
  const yInterval = height / 180 * 30

  context.beginPath()

  for (let currX = x; currX <= width + x + 1; currX += xInterval) {
    context.moveTo(currX, y)
    context.lineTo(currX, height + y)
  }

  for (let currY = y; currY <= height + y + 1; currY += yInterval) {
    context.moveTo(x, currY)
    context.lineTo(width + x, currY)
  }

  context.strokeStyle = "#bbb"
  context.stroke()
}

export function ActionCanvas({ entries, starts }) {
  let reference = useRef(null)
  const { data: monthStats } = useSWR(["/productivity/statistics/", true])

  useEffect(() => {
    if (monthStats) {
      const width = 640
      const height = width * 9 / 16
      const padding = 1

      let canvas = reference.current
      canvas.width = width
      canvas.height = height
      let context = canvas.getContext("2d")

      drawBackgroundLines(context, padding, padding, width - padding * 2, height - padding * 2)
      drawMonthStatsLine(context, padding, padding, width - padding * 2, height - padding * 2, monthStats)
    }
  }, [monthStats])

  return <canvas ref={reference} />
}
