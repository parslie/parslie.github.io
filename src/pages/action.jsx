import useSWR from "swr";

import Article from "../components/article";
import Form from "../components/form";
import { TextField, SubmitField, DropDownField } from "../components/input";
import { ActionEntry } from "../components/entry";

export default function ActionPage({ me }) {
  const { data: prefabs } = useSWR("/action/prefabs/");
  const { data: categories } = useSWR("/action/categories/");
  const { data: descriptions } = useSWR("/action/prefabs/descriptions/");
  const { data: entries } = useSWR("/action/entries/");

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
      <Article title="Productivity per Day">
        <p>TODO: add action bar chart</p>
      </Article>

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

      <Article title="Actions of Today">
        {entries && entries.map(entry => <ActionEntry key={entry.id} data={entry} />)}
      </Article>
    </main>
  );
}
