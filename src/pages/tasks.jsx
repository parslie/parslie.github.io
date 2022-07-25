import useSWR, { mutate } from "swr";
import { post } from "../utils/request";
import { secondsToText } from "../utils/string";

import Article from "../components/article";
import BarChart from "../components/barchart";
import Widget from "../components/widget";
import Form, { ButtonField, SubmitField, TextField } from "../components/input";
import { WidgetGrid } from "../components/list";

function getBarChartData(statistics) {
  let data = [];
  
  for (let day of statistics.days) {
    data.push({
      label: new Date(day.date).toLocaleDateString("sv-SE"),
      percentage: day.duration / (60 * 60 * 24),
      tooltip: secondsToText(day.duration),
    });
  }

  return data;
}

function TaskEntry({ data }) {
  const startDate = new Date(data.start_date);
  const endDate = new Date(data.end_date);
  const duration = (endDate - startDate) / 1000;
  return (
    <Widget title={data.task.name}>
      <p>This task was started {startDate.toLocaleTimeString("sv-SE")} and took {secondsToText(duration)}.</p>
    </Widget>
  );
}

function TaskType({ me, data }) {
  const startTask = () => {
    post(`/tasks/types/${data.id}/start/`, {}, true).then(res => {
      mutate("/tasks/types/");
    }).catch(({ response: res }) => {
      // TODO: add some type of error response
    });
  };

  const endTask = () => {
    post(`/tasks/types/${data.id}/end/`, {}, true).then(res => {
      mutate("/tasks/statistics/");
      mutate("/tasks/entries/");
      mutate("/tasks/types/");
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

function TasksPage({ me }) {
  const { data: statistics } = useSWR("/tasks/statistics/");
  const { data: entries } = useSWR("/tasks/entries/");
  const { data: types } = useSWR("/tasks/types/");

  const createTaskType = (e) => {
    post("/tasks/types/", { name: e.target.name.value }, true).then(res => {
      e.target.reset()
      mutate("/tasks/types/");
    }).catch(({ response: res }) => {
      // TODO: add some type of error response
    });
  };

  return (
    <main>
      <Article title="Statistics">
        {statistics && <BarChart title="Total Task Time (past 7 days)" data={getBarChartData(statistics)} />}
      </Article>

      <Article title="Today's Entries">
        <WidgetGrid>{entries && entries.map((entry, key) => <TaskEntry data={entry} key={key} />)}</WidgetGrid>
      </Article>
      
      <Article title="Available Task Types">
        {me && me.is_superuser && (
          <Form onSubmit={createTaskType}>
            <TextField name="name" placeholder="Enter task name here..."/>
            <SubmitField label="Create Task Type" />
          </Form>
        )}
        <WidgetGrid>{types && types.map((task, key) => <TaskType me={me} data={task} key={key} />)}</WidgetGrid>
      </Article>
    </main>
  );
}

export default TasksPage;
