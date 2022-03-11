import useSWR, { mutate } from "swr"
import { post, del } from "../utils/request"

import { Button, SelectMenu, SingleLineField } from "../components/input"

function ActionEntry({ data }) {
  const deleteEntry = () => {
    del(`/productivity/entries/${data.id}/`, true).then(res => {
      mutate(["/productivity/entries/", true])
    })
  }

  return (
    <div className="action-entry row">
      <h3>{data.action}</h3>
      {data.description && <h3>({data.description})</h3>}
      <div className="spacer" />
      <Button title="delete" onClick={deleteEntry} />
    </div>
  )
}

function ProductivityPage({ me }) {
  const { data: actions } = useSWR(["/productivity/actions/", true])
  const { data: prefabs } = useSWR(["/productivity/prefabs/", true])
  const { data: entries } = useSWR(["/productivity/entries/", true])

  const actionList = []
  if (actions)
    actions.map(action => actionList.push(action.name))

  const logAction = (e) => {
    e.preventDefault()
    
    const data = {
      action: e.target.action.value,
      description: e.target.description.value,
    }

    post("/productivity/entries/", data, true).then(res => {
      e.target.reset()
      mutate(["/productivity/entries/", true])
    })
  }

  return (
    <main>
      <article>
        <h1>Log an Action</h1>
        <form onSubmit={logAction}>
          <SelectMenu name="action" values={actionList} 
            placeholder="-- Please select an action --" />
          <SingleLineField name="description" placeholder="Enter description here..." />
          <Button type="submit" title="Log" />
        </form>
      </article>

      {entries && entries.length > 0 && (
        <article>
          {entries.map((entry, i) => <ActionEntry key={i} data={entry} />)}
        </article>
      )}
    </main>
  )
}

export default ProductivityPage
