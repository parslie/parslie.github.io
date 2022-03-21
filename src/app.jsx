import useSWR from "swr"

import "./app.scss"
import "./misc.scss"

import Form from './components/articles/form'
import { HomePost, SoftwarePost } from "./components/articles/posts"
import { ActionBarChart } from "./components/articles/productivity"
import { SingleLineField, MultiLineField, SelectMenu } from "./components/input/fields"
import { LinkButton, Button, SubmitButton } from "./components/input/buttons"

export default function App() {
  const me = useSWR(["/accounts/me/", true])

  const mockHomeData = {
    title: "Title yay! Home!",
    content: "This is content. **wohoo!**",
    date: "2022-03-14T09:38:42.759059+01:00",
  }

  const mockSoftwareData = {
    title: "Title yay! Software!",
    content: "This is content. **wohoo!**",
    repository: "parslie/parslie.github.io",
    date: "2022-03-14T09:38:42.759059+01:00",
  }

  const mockProductivityStats = {
    day_count: 14,
    max_duration: 60*30,
    categories: [
      {
        name: "Cleaning",
        color: "red",
        durations: [0, 0, 30*2, 60*4, 0, 0, 60*4, 0, 60*3, 0, 0, 60*3, 0, 0],
      },
      {
        name: "Socializing",
        color: "green",
        durations: [0, 0, 30*5, 60, 0, 40*3, 60*4, 0, 60*3, 0, 0, 60*6, 60*2, 0],
      },
      {
        name: "Studying",
        color: "blue",
        durations: [60*20, 0, 30*10, 60*2, 50*6, 40*3, 60*2, 0, 60*6, 0, 0, 0, 60*10, 0],
      },
    ],
  }

  return (
    <div className="app">
      <aside>
        <h1>Parslie</h1>
        <nav>
          <LinkButton to="/" label="home" />
          <LinkButton to="/software" label="software" />
          <LinkButton to="/contact" label="contact" />
          <LinkButton to="/productivity" label="productivity" />

          {me ? <Button label="log out" /> : (
            <>
              <LinkButton to="/login" label="log in" />
              <LinkButton to="/register" label="register" />
            </>
          )}
        </nav>
      </aside>

      <main>
        <ActionBarChart data={mockProductivityStats} />
        <HomePost data={mockHomeData} />
        <SoftwarePost data={mockSoftwareData} />
        <Form title="This is a form!">
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
      </main>
    </div>
  )
}
