import useSWR, { mutate } from "swr"
import { post } from "../utils/request"

import { Button, SelectMenu, SingleLineField } from "../components/input"
import { ActionStart, ActionEntry } from "../components/productivity/entry"
import ActionGraph from "../components/productivity/graph"

function ProductivityPage({ me }) {
  const { data: categories } = useSWR(["/productivity/categories/", true])
  const { data: entries } = useSWR(["/productivity/entries/", true])
  const { data: starts } = useSWR(["/productivity/starts/", true])

  const categoryList = []
  if (categories)
    categories.map(category => categoryList.push(category.name))

  const startAction = (e) => {
    e.preventDefault()
      
    const data = {
      category: e.target.category.value,
      description: e.target.description.value,
    }
  
    post("/productivity/starts/", data, true).then(res => {
      e.target.reset()
      mutate(["/productivity/starts/", true])
    })
  }

  return (
    <main>
      <article>
        <h1>Log an Action</h1>
        <form onSubmit={startAction}>
          <SelectMenu name="category" values={categoryList} 
            placeholder="-- Please select a category --" />
          <SingleLineField name="description" placeholder="Enter description here..." />
          <Button type="submit" title="Log" />
        </form>
      </article>

      {entries && starts && (
        <>
          <article>
            <h1>Statistics</h1>
            <ActionGraph />
          </article>

          <article>
            <h1>Entries</h1>
            {starts.map((start, i) => <ActionStart key={i} data={start} />)}
            {entries.map((entry, i) => <ActionEntry key={i} data={entry} />)}
          </article>
        </>
      )}
    </main>
  )
}

export default ProductivityPage
