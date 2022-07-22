import { mutate } from "swr";
import { post } from "../../utils/request";
import { secondsToText } from "../../utils/string";

import Widget from "../../components/widget";
import { ButtonField } from "../../components/input";

function TaskEntry({ me, data }) {
  const startDate = new Date(data.start_date);
  const endDate = new Date(data.end_date);
  const duration = (endDate - startDate) / 1000;

  return (
    <Widget title={data.task.name}>
      <p>This task was started {startDate.toLocaleTimeString("sv-SE")} and took {secondsToText(duration)}.</p>
    </Widget>
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
      mutate("/todo/statistics/");
    }).catch(({ response: res }) => {
      // TODO: add some type of error response
    });
  };


  let actionButtons = [];
  if (me && me.is_superuser) {
    actionButtons.push(<ButtonField key={1} label="Start" onClick={startTask} disabled={data.is_started}  />);
    actionButtons.push(<ButtonField key={2} label="End" onClick={endTask} disabled={!data.is_started} />);
  }

  return (
    <Widget title={data.name} buttons={actionButtons}>
      {data.average_duration !== 0 
        ? <p>This task takes {secondsToText(data.average_duration)} on average.</p>
        : <p>This task hasn't been performed yet.</p>}
    </Widget>
  );
}

export { Task, TaskEntry };
