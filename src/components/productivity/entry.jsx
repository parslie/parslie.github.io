import { mutate } from "swr"
import { del, post } from "../../utils/request"

import { Button } from "../input"

export function ActionStart({ data }) {
  const endAction = () => {
    // TODO: handle errors
    post("/productivity/entries/", { start: data.id }, true).then(res => {
      mutate(["/productivity/starts/", true])
      mutate(["/productivity/entries/", true])
      mutate("/productivity/statistics/")
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
      <Button onClick={deleteAction} title="Delete" />
    </div>
  )
}
