import useSWR, { mutate } from "swr";
import { post } from "../../utils/request";

import "./style.scss";
import { Task, TaskEntry } from "./components";

import Article from "../../components/article";
import Form, { LinkButtonField, SubmitField, TextField } from "../../components/input";
import AccountButtons from "../../components/account";

function Header({ me }) {
  return (
    <header>
      <h1>Viktor Holta</h1>
      <LinkButtonField label="About" to="/" />
      <LinkButtonField label="Tasks" to="/tasks" />
      <LinkButtonField label="Toki Pona" to="/tokipona" />
      <AccountButtons me={me} />
    </header>
  );
}

function Main({ me }) {
  const { data: tasks } = useSWR("/todo/tasks/");
  const { data: entries } = useSWR("/todo/entries/");

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
      <Article title="Weekly Statistics (W.I.P)">
        <p>This chart shows the amount of tasks Viktor has completed this week.</p>
      </Article>
      <Article title="Daily Entries" collapsable>
        {entries && entries.map(entry => <TaskEntry me={me} data={entry} key={entry.id} />)}
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
