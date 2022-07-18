import { mutate } from "swr";
import { post } from "../../utils/request";
import { secondsToText } from "../../utils/string";

import { ButtonField } from "../../components/input";

function TaskEntry({ me, data }) {
  const startDate = new Date(data.start_date);
  const endDate = new Date(data.end_date);
  const duration = (endDate - startDate) / 1000;

  return (
    <div className="task-entry">
      <header>{data.task.name}</header>
      <section>
        <span className="description">This task was started {startDate.toLocaleTimeString("sv-SE")} and took {secondsToText(duration)}.</span>
      </section>
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
      <header>{data.name}</header>
      <section>
        {data.average_duration !== 0 
          ? <span className="description">This task takes {secondsToText(data.average_duration)} on average.</span>
          : <span className="description">This task hasn't been performed yet.</span>}
        {me && me.is_superuser && data.is_started && <ButtonField label="End" onClick={endTask} />}
        {me && me.is_superuser && !data.is_started && <ButtonField label="Start" onClick={startTask} />}
      </section>
    </div>
  );
}

export { Task, TaskEntry };
