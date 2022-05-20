import { useEffect, useState } from "react";

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
  const [ durationStr, setDurationStr ] = useState(getDurationStr(data));
  
  useEffect(() => {
    const interval = setInterval(() => setDurationStr(getDurationStr(data)), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="action-entry">
      <h4 className="title">{data.prefab.category.name}</h4>
      <div className="separator" />
      <h4 className="description">{data.prefab.description}</h4>
      <div className="separator" />
      <h4 className="duration">{durationStr}</h4>
      {!data.end_date && <ButtonField label="End" />}
      <ButtonField label="Delete" />
    </div>
  );
}
