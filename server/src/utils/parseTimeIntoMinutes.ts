const MINUTES_PER_HOUR = 60;

function parseTimeIntoMinutes(time: string): null | number {
  const pattern = /\d{1,2}:\d{2}/;

  if (!pattern.test(time)) {
    return null;
  }

  const [hours, minutes] = time.split(':').map(Number);
  const timeInMinutes = hours * MINUTES_PER_HOUR + minutes;

  return timeInMinutes;
}

export default parseTimeIntoMinutes;
