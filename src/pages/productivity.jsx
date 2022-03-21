import { mutate } from "swr"
import useSWR from "swr"
import { post } from "../utils/request"

import { ActionBarChart, ActionEntry, ActionStart } from "../components/articles/productivity"
import Form from "../components/articles/form"
import { SingleLineField, SelectMenu } from "../components/input/fields"
import { SubmitButton } from "../components/input/buttons"

export default function ProductivityPage({ me }) {
  const { data: statistics } = useSWR("/productivity/statistics/")
  const { data: categories } = useSWR("/productivity/categories/")
  const { data: entries } = useSWR(["/productivity/entries/", true])
  const { data: starts } = useSWR(["/productivity/starts/", true])

  const categoryList = []
  if (categories)
    categories.map(category => categoryList.push(category.name))

  const logAction = (e) => {
    const logData = {
      category: e.target.category.value,
      description: e.target.description.value,
    }
  
    post("/productivity/starts/", logData, true).then(res => {
      e.target.reset()
      mutate(["/productivity/starts/", true])
    })
  }

  return (
    <main>
      {me && me.is_superuser && (
        <Form title="Log an Action" onSubmit={logAction}>
          <SingleLineField id="desc" name="description" 
            label="Description" placeholder="Enter description here..." />
          <SelectMenu id="category" name="category" label="Category" options={categoryList} 
            values={categoryList} defaultOption="-- Please select a category --" />
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
    </main>
  )
}
