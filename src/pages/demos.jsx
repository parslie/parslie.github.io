import FormArticle from "../articles/form";
import { ButtonField, SubmitField, TextField } from "../components/input";

export function FormDemoPage() {
  return (
    <main>
      <FormArticle title="Errors, Text Fields, and Buttons">
        <TextField name="title" placeholder="Enter single-line text here..." options={["test", "not", "what", "lol", "ecks dee"]} />
        <TextField error="this text area has an error" name="description" placeholder="Enter multi-line text here..." multiline={true} list="title-list" />
        <ButtonField label="Button" />
        <SubmitField label="Submit" error="the submission caused an error" />
      </FormArticle>
      <FormArticle title="Second Form">
        
      </FormArticle>
    </main>
  );
}
