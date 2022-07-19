export function secondsToText(seconds) {
  const minutes = seconds / 60;
  const hours = minutes / 60;
  
  if (hours >= 1)
    return `${hours.toFixed(1)} hours`;
  else if (minutes >= 1)
    return `${minutes.toFixed(1)} minutes`;
  else 
    return `${seconds.toFixed(1)} seconds`;
}
