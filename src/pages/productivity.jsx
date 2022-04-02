import useSWR from "swr"
import { post } from "../utils/request"

import Form from "../components/form"
import { SingleLineText, SelectMenu } from "../components/fields"
import { SubmitButton } from "../components/buttons"
import { ActionEntry, ActionChart, ActionStart } from "../components/productivity"

export default function ProductivityPage({ me }) {
  const { data: actionTypes } = useSWR("/productivity/types/") // TODO: remove action from names
  const { data: actionStarts } = useSWR(["/productivity/starts/", true])
  const { data: actionEntries } = useSWR(["/productivity/entries/", true])
  const { data: statistics } = useSWR("/productivity/statistics/")

  const logAction = (e) => {

  }

  return (
    <main>
      {statistics && <ActionChart data={statistics} />}

      {me && me.is_superuser && (
        <>
          {actionTypes && (
            <Form title="Log an Action" onSubmit={logAction}>
              <SelectMenu name="type" defaultOption="--Select an action type--"
                options={actionTypes.map(type => type.name)} 
                values={actionTypes.map(type => type.id)} />
              <SingleLineText name="description" placeholder="Enter a description here..." />
              <SubmitButton label="Log" />
            </Form>
          )}

          {actionStarts && actionEntries && (
            <article>
              <header>
                <h1>Action Entries</h1>
              </header>
              <section>
                {actionStarts.map((actionStart, i) => <ActionStart key={i} data={actionStart} />)}
                {actionEntries.map((actionEntry, i) => <ActionEntry key={i} data={actionEntry} />)}
              </section>
            </article>
          )}
        </>
      )}
    </main>
  )
}
