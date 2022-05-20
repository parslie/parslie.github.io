import "../styles/entry.scss";
import { ButtonField } from "./input";

function getDurationStr(data) {
  let endDate = (data.end_date) ? new Date(data.end_date) : new Date(Date.now());
  const durationMs = endDate - new Date(data.start_date);
  const hours = durationMs / 1000 / 60 / 60;
  const minutes = durationMs / 1000 / 60;
  const seconds = durationMs / 1000;
  if (hours >= 1)
    return `${hours.toFixed(1)} hours`;
  else if (minutes >= 1)
    return `${minutes.toFixed(1)} minutes`;
  else 
    return `${seconds.toFixed(1)} seconds`
}

export function ActionEntry({ me, data }) {
  let titleStr = data.prefab.category.name + " — " + data.prefab.description + " — ";
  let dateStr = new Date(data.start_date).toLocaleString("sv-SE") + " - ";

  if (data.end_date) {
    titleStr += getDurationStr(data);
    dateStr += new Date(data.end_date).toLocaleString("sv-SE");
  } else {
    titleStr += "ONGOING";
    dateStr += "NOW";
  }

  return (
    <div className="action-entry">
      <div className="info">
        <h4>{titleStr}</h4>
        <h6>{dateStr}</h6>
      </div>
      
      {me && me.is_superuser && (
        <div className="buttons">
          {!data.end_date && <ButtonField label="End" />}
          <ButtonField label="Delete" />
        </div>
      )}
    </div>
  );
}
