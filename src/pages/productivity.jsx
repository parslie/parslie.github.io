import { mutate } from "swr"
import useSWR from "swr"
import { post } from "../utils/request"

import { ActionBarChart, ActionEntry, ActionStart } from "../components/articles/productivity"
import Form from "../components/articles/form"
import { SingleLineField, SelectMenu } from "../components/input/fields"
import { SubmitButton } from "../components/input/buttons"

export default function ProductivityPage({ me }) {
  const { data: statistics } = useSWR("/productivity/statistics/")
  const { data: types } = useSWR("/productivity/types/")
  const { data: entries } = useSWR(["/productivity/entries/", true])
  const { data: starts } = useSWR(["/productivity/starts/", true])

  const typeList = []
  const typeIdList = []
  if (types) {
    types.map(type => {
      typeList.push(type.name)
      typeIdList.push(type.id)
    })
  }

  const logAction = (e) => {
    const logData = {
      type: e.target.type.value,
      description: e.target.description.value,
    }
  
    post("/productivity/starts/", logData, true).then(res => {
      e.target.reset()
      mutate(["/productivity/starts/", true])
    })
  }

  return (
    <div className="articles">
      {me && me.is_superuser && (
        <Form title="Log an Action" onSubmit={logAction}>
          <SingleLineField id="desc" name="description" 
            label="Description" placeholder="Enter description here..." />
          <SelectMenu id="type" name="type" label="Type" options={typeList} 
            values={typeIdList} defaultOption="-- Please select a type --" />
          <SubmitButton label="Log" />
        </Form>
      )}

      {statistics && <ActionBarChart data={statistics} />}

      {me && me.is_superuser && entries && starts && (
        <article className="actions">
          <h2>Actions of Today</h2>
          {starts.map((start, i) => <ActionStart key={i} data={start} />)}
          {entries.map((entry, i) => <ActionEntry key={i} data={entry} />)}
        </article>
      )}
    </div>
  )
}
