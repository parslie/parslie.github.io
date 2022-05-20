import FormArticle from "../articles/form";
import { ButtonField, SubmitField, TextField } from "../components/input";
import { ActionBarChart } from "../components/graph";

export function FormDemoPage() {
  return (
    <main>
      <FormArticle title="Errors, Text Fields, and Buttons">
        <TextField name="title" placeholder="Enter single-line text here..." options={["test", "not", "what", "lol", "ecks dee"]} />
        <TextField error="this text area has an error" name="description" placeholder="Enter multi-line text here..." multiline={true} list="title-list" />
        <ButtonField label="Button" />
        <SubmitField label="Submit" error="the submission caused an error" />
      </FormArticle>
    </main>
  );
}

export function GraphDemoPage() {
  const mockActionBarData = {
    max_duration: 250,
    day_count: 7,
    categories: [
      {id: 0, name: "Working", color: "orange", durations: [80, 40, 40, 50, 40, 30, 20]},
      {id: 1, name: "Training", color: "pink", durations: [20, 10, 40, 50, 20, 10, 20]},
      {id: 2, name: "Cleaning", color: "red", durations: [20, 70, 40, 50, 30, 5, 20]},
      {id: 3, name: "Studying", color: "purple", durations: [20, 40, 40, 50, 40, 30, 20]},
      {id: 4, name: "Preening", color: "green", durations: [50, 10, 30, 20, 30, 40, 50]},
      {id: 5, name: "Socializing", color: "blue", durations: [50, 10, 30, 30, 30, 40, 50]},
    ],
  };
  
  return (
    <main>
      <article>
        <header><h1>Bar Chart</h1></header>
        <section>
          <ActionBarChart data={mockActionBarData} />
        </section>
      </article>
    </main>
  );
}
