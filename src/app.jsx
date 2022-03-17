import "./app.scss"

import Form, { 
  SingleLineField, MultiLineField, SelectMenu, Button, SubmitButton 
} from './components/form'

export default function App() {
  return (
    <div className="app">
      <aside>

      </aside>
      <main>
        <article className="post">
          <h1 className="title">This is a mock home post!</h1>
          <h5 className="date">2022-03-17 17:19</h5>
          <p>
            These articles are pretty bare-bones. 
            They consist of nothing more than a title, markdown content, and a date.
          </p>
        </article>

        <article className="post">
          <h1 className="title">This is a mock software post!</h1>
          <h5 className="date">2022-03-17 17:21</h5>
          <p>
            These articles are pretty similar to home posts.
            The only difference is that they have a link to a repository at
            the bottom.
          </p>
          <p>Like <a href="#/">this</a></p>
        </article>

        <article className="form">
          <h1 className="title">This is a form!</h1>
          <p>
            These are a little different, 'cause they don't consist of markdown.
            They might have <b>{"<p>"}</b> elements that describe what they are for,
            but mostly they just consist of one <b>{"<form>"}</b> element.
          </p>
          <p>
            Inside the <b>{"<form>"}</b> element there exists <b>{"<input>"}</b> elements
            that are encapsulated inside <b>{"<div className=\"form-field\">"}</b> and <b>{"<div className=\"form-button\">"}</b> elements.
          </p>
          <Form>
            <SingleLineField id="slt" name="slt" label="Single-line Text" 
              placeholder="Enter text here..." error="Test error." />
            <MultiLineField id="mlt" name="mlt" label="Multi-line Text" 
              placeholder="Enter text here..." error="Test error." />
            <SelectMenu id="slctmenu" name="slctmenu" label="Select Menu"
              options={["Option 1", "Option 2"]} values={["Value 1", "Value 2"]}
              defaultOption="-- Select an item ---" error="Test error." />
            <Button label="button" error="Test error." />
            <SubmitButton label="submit" error="Test error." />
          </Form> 
        </article>
      </main>
    </div>
  )
}
