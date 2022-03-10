import useSWR from "swr"

import { Button, SelectMenu, SingleLineField } from "../components/input"

function ProductivityPage({ me }) {
  const { data: availableActions } = useSWR("/productivity/actions/")

  const logAction = (e) => {
    e.preventDefault()
    console.log(e.target.action.value)
  }

  return (
    <main>
      <article>
        <h1>Log an Action</h1>
        <form onSubmit={logAction}>
          <SelectMenu name="action" labels={["test", "asd"]} values={["1", "2"]} 
            placeholder="-- Please select an action --" />
          <SingleLineField name="description" placeholder="Enter description here..." />
          <Button type="submit" title="Log" />
        </form>
      </article>
    </main>
  )
}

export default ProductivityPage
