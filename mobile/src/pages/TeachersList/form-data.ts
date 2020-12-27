
const generateTimeSteps = () => {
  const TIME_STEPS = 30
  const MINUTES_IN_A_DAY = 1440
  const times: string[] = []
  let time = 0

  const convertMinutesToTime = (minutes: number) => {
    const MINUTES_IN_AN_HOUR = 60
    const hours = minutes / MINUTES_IN_AN_HOUR
    const intHours = Math.floor(hours)
    const intMinutes = Math.round((hours - intHours) * MINUTES_IN_AN_HOUR)

    return `${intHours}:${String(intMinutes).length === 1 ? `0${intMinutes}` : intMinutes}`
  }

  while (time < MINUTES_IN_A_DAY) {
    times.push(convertMinutesToTime(time))
    time += TIME_STEPS
  }

  return times
}

const subjects = [
  { value: 'Biologia', label: 'Biologia' },
  { value: 'Física', label: 'Física' },
  { value: 'Geografia', label: 'Geografia' },
  { value: 'História', label: 'História' },
  { value: 'Lógica', label: 'Lógica' },
  { value: 'Matemática', label: 'Matemática' },
  { value: 'Português', label: 'Português' },
  { value: 'Química', label: 'Química' },
]

const weekdays = [
  { value: '0', label: 'Domingo' },
  { value: '1', label: 'Segunda-feira' },
  { value: '2', label: 'Terça-feira' },
  { value: '3', label: 'Quarta-feira' },
  { value: '4', label: 'Quinta-feira' },
  { value: '5', label: 'Sexta-feira' },
  { value: '6', label: 'Sábado' },
]

const times = generateTimeSteps().map((time) => ({
  value: time, label: time,
}))

export default { subjects, weekdays, times }
