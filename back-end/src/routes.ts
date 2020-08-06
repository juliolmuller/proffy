import express from 'express'
import database from './database/connection'
import parseTimeIntoMinutes from './utils/parseTimeIntoMinutes'

const routes = express.Router()

routes.get('/', (req, res) => res.json({ message: 'Hello, there!' }))

routes.post('/classes', async (req, res) => {
  const { name, avatar, whatsapp, bio, subject, price, schedule } = req.body
  const transaction = await database.transaction()

  try {
    /* eslint-disable camelcase */
    const [user_id] = await transaction('users').insert({ name, avatar, whatsapp, bio })
    const [class_id] = await transaction('classes').insert({ subject, price, user_id })
    /* eslint-enable camelcase */
    await transaction('class_schedules').insert(schedule.map((sch: any) => ({
      weekday: sch.weekday,
      from: parseTimeIntoMinutes(sch.from),
      to: parseTimeIntoMinutes(sch.to),
      class_id,
    })))

    await transaction.commit()

    res.status(201).send()
  } catch (error) {
    transaction.rollback(error)

    res.status(400).json({
      error: 'Unexpected error while creating user/class.',
    })
  }
})

export default routes
