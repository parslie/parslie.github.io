import useSWR from "swr";

import FormArticle from "../articles/form";
import { TextField, SubmitField, DropDownField } from "../components/input";

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
      {me && me.is_superuser && (
        <FormArticle title="Log an Action">
          <DropDownField name="category" placeholder="--Select a category--" options={categoryNames} 
            values={categoryIds} />
          <TextField name="description" placeholder="Enter description here..." options={descriptions} />
          <SubmitField label="Log" />
        </FormArticle>
      )}
    </main>
  );
}
