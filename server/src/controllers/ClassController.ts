import { Request, Response } from 'express'
import HttpStatus from 'http-status-codes'
import database from '../database/connection'
import parseTimeIntoMinutes from '../utils/parseTimeIntoMinutes'

interface QueryFilters {
  weekday?: string
  subject?: string
  time?: string
}

interface FriendlySchedule {
  weekday: number
  from: string
  to: string
}

class ClassController {
  async index(request: Request, response: Response): Promise<void> {
    const filters: QueryFilters = request.query
    const timeInMinutes = parseTimeIntoMinutes(filters.time as string)

    if (!filters.weekday || !filters.subject || !filters.time) {
      response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        error: 'Search filter(s) missing.',
      })
      return
    }

    if (!timeInMinutes) {
      response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        error: 'Invalid time format (expected hh:mm).',
      })
      return
    }

    const classes = await database('classes')
      .where('classes.subject', '=', filters.subject)
      .select(['classes.*', 'users.*'])
      .join('users', 'classes.user_id', '=', 'users.id')
      .whereExists((query) => {
        query.select('class_schedules.*')
          .from('class_schedules')
          .whereRaw('class_schedules.class_id = classes.id')
          .whereRaw('class_schedules.weekday = ??', [Number(filters.weekday)])
          .whereRaw('class_schedules.from <= ??', [timeInMinutes])
          .whereRaw('class_schedules.to > ??', [timeInMinutes])
      })

    response.status(HttpStatus.OK).json(classes)
  }

  async store(request: Request, response: Response): Promise<void> {
    const {
      name, avatar, whatsapp, bio, subject, price, schedule,
    } = request.body
    const transaction = await database.transaction()

    try {
      const [user_id] = await transaction('users').insert({ name, avatar, whatsapp, bio }, 'id')
      const [class_id] = await transaction('classes').insert({ subject, price, user_id }, 'id')

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
      throw error
    }
  }
}

export default ClassController
