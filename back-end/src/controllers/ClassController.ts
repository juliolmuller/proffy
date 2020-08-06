import { Request, Response } from 'express'
import HttpStatus from 'http-status-codes'
import database from '../database/connection'
import parseTimeIntoMinutes from '../utils/parseTimeIntoMinutes'

interface FriendlySchedule {
  weekday: number
  from: string
  to: string
}

class ClassController {

  async create(request: Request, response: Response) {
    const {
      name, avatar, whatsapp, bio, subject, price, schedule,
    } = request.body
    const transaction = await database.transaction()

    try {
      /* eslint-disable camelcase */
      const [user_id] = await transaction('users').insert({ name, avatar, whatsapp, bio })
      const [class_id] = await transaction('classes').insert({ subject, price, user_id })
      /* eslint-enable camelcase */
      await transaction('class_schedules').insert(schedule.map((sch: FriendlySchedule) => ({
        weekday: sch.weekday,
        from: parseTimeIntoMinutes(sch.from),
        to: parseTimeIntoMinutes(sch.to),
        class_id,
      })))

      await transaction.commit()

      response.status(HttpStatus.CREATED).send()
    } catch (error) {
      transaction.rollback(error)

      response.status(HttpStatus.BAD_REQUEST).json({
        error: 'Unexpected error while creating user, class or schedules.',
      })
    }
  }
}

export default ClassController
