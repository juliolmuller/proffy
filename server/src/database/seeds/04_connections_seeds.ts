/* eslint-disable object-curly-newline */
import { Knex } from 'knex'
import { TABLE_NAME } from '../migrations/04_create_connections_table'
import { data as classes } from './02_classes_seeds'

function generateData() {
  const CONNECTIONS_PER_CLASS = 3
  const data: unknown[] = []

  classes.forEach(({ user_id }) => {
    for (let i = 0; i < CONNECTIONS_PER_CLASS; i++) {
      data.push({ user_id })
    }
  })

  return data
}

export async function seed(knex: Knex) {
  await knex(TABLE_NAME).del()
  await knex(TABLE_NAME).insert(generateData())
}
