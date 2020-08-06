
function parseTimeIntoMinutes(time: string) {
  const pattern = /\d{1,2}:\d{2}/

  if (!pattern.test(time)) {
    return null
  }

  const [hours, minutes] = time.split(':').map(Number)
  const timeInMinutes = (hours * 60) + minutes

  return timeInMinutes
}

export default parseTimeIntoMinutes
