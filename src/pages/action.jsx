import useSWR from "swr";

import Article from "../components/article";
import Form from "../components/form";
import { TextField, SubmitField, DropDownField } from "../components/input";
import { ActionEntry } from "../components/entry";
import { ActionBarChart } from "../components/graph";

export default function ActionPage({ me }) {
  const { data: categories } = useSWR("/action/categories/");
  const { data: descriptions } = useSWR("/action/prefabs/descriptions/");
  const { data: entries } = useSWR("/action/entries/");
  const { data: statistics } = useSWR("/action/statistics/");

  let categoryNames = [];
  let categoryIds = [];
  if (categories) {
    for (const category of categories) {
      categoryNames.push(category.name);
      categoryIds.push(category.id);
    }
  }

  return (
    <main>
      {statistics && (
        <Article title="Productivity per Day">
          <ActionBarChart data={statistics} />
        </Article>
      )}

      {me && me.is_superuser && (
        <Article title="Log an Action">
          <Form>
            <DropDownField name="category" placeholder="--Select a category--" options={categoryNames} 
              values={categoryIds} />
            <TextField name="description" placeholder="Enter description here..." options={descriptions} />
            <SubmitField label="Log" />
          </Form>
        </Article>
      )}

      {entries && (
        <Article title="Actions of Today">
          {entries.map(entry => <ActionEntry key={entry.id} me={me} data={entry} />)}
        </Article>
      )}
    </main>
  );
}
