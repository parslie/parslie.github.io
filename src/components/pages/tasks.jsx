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
      <Article title="Create a New Task">
        <Form onSubmit={createTask}>
          <TextField name="name" placeholder="Enter name here..." error={nameError} />
          <SubmitField label="Create" error={generalError} />
        </Form>
      </Article>
      <Article title="Available Tasks">
        {tasks && tasks.map(task => <Task me={me} data={task} key={task.id} />)}
      </Article>
    </main>
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
    }).catch(({ response: res }) => {
      // TODO: add some type of error response
    });
  };

  return (
    <div className="task">
      <h3 className="name">{data.name}</h3>
      <span className="spacer" />
      {data.last_used != null 
        ? <span className="duration">this task takes {secondsToText(data.average_duration)}</span>
        : <span className="duration">this task hasn't been performed yet</span>}
      {data.is_started 
        ? <ButtonField label="End" onClick={endTask} />
        : <ButtonField label="Start" onClick={startTask} />}
    </div>
  );
}
