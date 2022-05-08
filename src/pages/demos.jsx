import FormArticle from "../articles/form";
import { TextField } from "../components/input";

export function FormDemoPage() {
  return (
    <main>
      <FormArticle title="First Form">
        <TextField name="title" placeholder="Enter single-line text here..." options={["test", "not", "what", "lol", "ecks dee"]} />
        <TextField name="description" placeholder="Enter multi-line text here..." multiline={true} list="title-list" />
      </FormArticle>
      <FormArticle title="Second Form">
        
      </FormArticle>
    </main>
  );
}
