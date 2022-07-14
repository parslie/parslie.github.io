import { useState } from "react";
import useSWR, { mutate } from "swr";

import { post } from "../../utils/request";
import { secondsToText } from "../../utils/string";

import "../../styles/pages/tasks.scss";
import AccountButtons from "../account";
import { Article } from "../containers";
import Form, { ButtonField, LinkButtonField, SubmitField, TextField } from "../input";

export function TasksHeader({ me }) {
  return (
    <header>
      <h1>Viktor Holta</h1>
      <LinkButtonField to="/" label="About" />
      <LinkButtonField to="/tasks" label="Tasks" />
      <LinkButtonField to="/tokipona" label="Toki Pona" />
      <AccountButtons me={me} />
    </header>
  );
}

export function TasksMain({ me }) {
  const [ nameError, setNameError ] = useState("");
  const [ generalError, setGeneralError ] = useState("");
  const { data: tasks } = useSWR("/todo/tasks/");
  const { data: entries } = useSWR("/todo/entries/");

  const createTask = (e) => {
    post("/todo/tasks/", { name: e.target.name.value }, true).then(res => {
      e.target.reset()
      mutate("/todo/tasks/");
      setNameError("");
      setGeneralError("");
    }).catch(({ response: res }) => {
      setNameError(res.data.name);
      setGeneralError(`${res.status} ${res.statusText}`);
    });
  };

  return (
    <main>
      <Article title="Weekly Statistics (W.I.P)">
        <p>This chart shows the amount of tasks Viktor has completed this week.</p>
      </Article>

      <Article title="Daily Entries">
        {entries && entries.map(entry => <TaskEntry me={me} data={entry} key={entry.id} />)}
      </Article>

      {me && me.is_superuser && (
        <Article title="Create a New Task">
          <Form onSubmit={createTask}>
            <TextField name="name" placeholder="Enter name here..." error={nameError} />
            <SubmitField label="Create" error={generalError} />
          </Form>
        </Article>
      )}

      <Article title="Tasks">
        {tasks && tasks.map(task => <Task me={me} data={task} key={task.id} />)}
      </Article>
    </main>
  );
}

function TaskEntry({ me, data }) {
  const startDate = new Date(data.start_date);
  const endDate = new Date(data.end_date);
  const duration = (endDate - startDate) / 1000;

  return (
    <div className="task-entry">
      <h3 className="name">{data.task.name}</h3>
      <span className="description">This task was started {startDate.toLocaleTimeString("sv-SE")} and took {secondsToText(duration)}.</span>
    </div>
  );
}

function Task({ me, data }) {
  const startTask = () => {
    post(`/todo/tasks/${data.id}/start/`, {}, true).then(res => {
      mutate("/todo/tasks/");
    }).catch(({ response: res }) => {
      // TODO: add some type of error response
    });
  };

  const endTask = () => {
    post(`/todo/tasks/${data.id}/end/`, {}, true).then(res => {
      mutate("/todo/tasks/");
      mutate("/todo/entries/");
    }).catch(({ response: res }) => {
      // TODO: add some type of error response
    });
  };

  return (
    <div className="task">
      <h3 className="name">{data.name}</h3>
      {data.average_duration !== 0 
        ? <span className="description">This task takes {secondsToText(data.average_duration)} on average.</span>
        : <span className="description">This task hasn't been performed yet.</span>}
      {me && me.is_superuser && data.is_started && <ButtonField label="End" onClick={endTask} />}
      {me && me.is_superuser && !data.is_started && <ButtonField label="Start" onClick={startTask} />}
    </div>
  );
}
