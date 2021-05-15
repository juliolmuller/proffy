import { Knex } from 'knex'
import { TABLE_NAME } from '../migrations/03_create_class_schedules_table'
import { data as classes } from './02_classes_seeds'

function generateData() {
  const DAYS_IN_A_WEEK = 7
  const HOURS_IN_A_DAY = 24
  const MINUTES_IN_A_HOUR = 60
  const SCHEDULES_PER_CLASS = 3

  const data: unknown[] = []

  classes.forEach((clazz: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    for (let i = 0; i < SCHEDULES_PER_CLASS; i++) {
      const weekday = Math.floor(Math.random() * DAYS_IN_A_WEEK)
      const time1 = Math.floor(Math.random() * HOURS_IN_A_DAY) * MINUTES_IN_A_HOUR
      const time2 = Math.floor(Math.random() * HOURS_IN_A_DAY) * MINUTES_IN_A_HOUR
      const from = Math.min(time1, time2)
      const to = Math.max(time1, time2)

      data.push({ weekday, from, to, class_id: clazz.id })
    }
  })

  return data
}

export async function seed(knex: Knex) {
  await knex(TABLE_NAME).del()
  await knex(TABLE_NAME).insert(generateData())
}
