function formatExactTime(ms) {
  let hours = Math.floor(ms / 3600000);
  ms %= 3600000;

  let minutes = Math.floor(ms / 60000);
  ms %= 60000;

  let seconds = Math.floor(ms / 1000);
  ms %= 1000;

  let parts = [];

  if (hours > 0) parts.push(hours + " hr");
  if (minutes > 0) parts.push(minutes + " min");
  if (seconds > 0) parts.push(seconds + " sec");
  if (parts.length === 0) parts.push(ms + " ms"); 

  return parts.join(" ");
}

export default formatExactTime