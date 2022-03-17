import "./app.scss"

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
          <form>
            <div className="form-field">
              <label for="single-line-input">Single-line Input</label>
              <input className="text-field" id="single-line-input" />
              <h5 className="error">This is error text.</h5>
            </div>
            <div className="form-field">
              <label for="multi-line-input">Multi-line Input</label>
              <textarea className="text-field" id="multi-line-input" />
              <h5 className="error">This is error text.</h5>
            </div>
            <div className="form-field">
              <label for="select-menu">Select Menu</label>
              <select id="select-menu" className="select-menu" defaultValue="">
                <option disabled value="">-- Select an option --</option>
                <option value="Value 1">Label 1</option>
              </select>
              <h5 className="error">This is error text.</h5>
            </div>
            <div className="form-button">
              <input type="submit" className="button" />
              <h5 className="error">This is error text.</h5>
            </div>
          </form> 
        </article>
      </main>
    </div>
  )
}
