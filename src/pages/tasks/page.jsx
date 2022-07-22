import useSWR, { mutate } from "swr";
import { post } from "../../utils/request";

import "./style.scss";
import { Task, TaskEntry } from "./components";

import Article from "../../components/article";
import Form, { SubmitField, TextField } from "../../components/input";
import AppNavigation from "../../components/navigation";
import AppTitle from "../../components/title";
import BarChart from "../../components/barchart";

function Header({ me }) {
  return (
    <header>
      <AppTitle value="Viktor Holta" />
      <AppNavigation me={me} />
    </header>
  );
}

function Main({ me }) {
  const { data: tasks } = useSWR("/todo/tasks/");
  const { data: entries } = useSWR("/todo/entries/");
  const { data: statistics } = useSWR("/todo/statistics/");

  const createTask = (e) => {
    post("/todo/tasks/", { name: e.target.name.value }, true).then(res => {
      e.target.reset()
      mutate("/todo/tasks/");
    }).catch(({ response: res }) => {
      // TODO: add some type of error response
    });
  };

  return (
    <main>
      <Article title="Statistics" collapsable>
        {statistics && <BarChart title="Total Task Time (past 7 days)" data={statistics} />}
      </Article>
      <Article title="Daily Entries" collapsable>
        <div className="task-entry-list">
          {entries && entries.map(entry => <TaskEntry me={me} data={entry} key={entry.id} />)}
        </div>
      </Article>
      <Article title="Tasks" collapsable>
        {me && me.is_superuser && (
          <Form onSubmit={createTask}>
            <TextField name="name" placeholder="Enter task name here..."/>
            <SubmitField label="Create Task" />
          </Form>
        )}
        <div className="task-list">
          {tasks && tasks.map(task => <Task me={me} data={task} key={task.id} />)}
        </div>
      </Article>
    </main>
  );
}

const TaskPage = ({ me }) => <><Header me={me} /><Main me={me} /></>;
export default TaskPage;
