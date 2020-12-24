/* eslint-disable no-use-before-define, object-curly-newline */
import Knex from 'knex'
import { TABLE_NAME } from '../migrations/04_create_connections_table'
import { data as classes } from './02_classes_seeds'

export const seed = async (knex: Knex): Promise<void> => {
  await knex(TABLE_NAME).del()
  await knex(TABLE_NAME).insert(generateData())
}

const generateData = (): unknown[] => {
  const CONNECTIONS_PER_CLASS = 3
  const data: unknown[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes.forEach(({ user_id }) => {
    for (let i = 0; i < CONNECTIONS_PER_CLASS; i++) {
      data.push({ user_id })
    }
  })

  return data
}
