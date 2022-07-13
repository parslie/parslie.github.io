export function secondsToText(seconds) {
  const minutes = seconds / 60;
  const hours = minutes / 60;
  
  if (hours >= 1)
    return `${hours.toFixed(0)} hours`;
  else if (minutes >= 1)
    return `${minutes.toFixed(0)} minutes`;
  else 
    return `${seconds} seconds`;
}
