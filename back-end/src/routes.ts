import express from 'express'
import database from './database/connection'
import parseTimeIntoMinutes from './utils/parseTimeIntoMinutes'

const routes = express.Router()

routes.get('/', (req, res) => res.json({ message: 'Hello, there!' }))

routes.post('/classes', async (req, res) => {
  const { name, avatar, whatsapp, bio, subject, price, schedule } = req.body

  /* eslint-disable camelcase */
  const [user_id] = await database('users').insert({ name, avatar, whatsapp, bio })
  const [class_id] = await database('classes').insert({ subject, price, user_id })
  /* eslint-enable camelcase */
  await database('class_schedules').insert(schedule.map((sch: any) => ({
    weekday: sch.weekday,
    from: parseTimeIntoMinutes(sch.from),
    to: parseTimeIntoMinutes(sch.to),
    class_id,
  })))

  res.status(201).send()
})

export default routes
