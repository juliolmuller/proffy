import { Knex } from 'knex'

export const TABLE_NAME = 'users'

// eslint-disable-next-line require-await
export async function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('id').primary()
    table.string('name').notNullable()
    table.string('avatar').notNullable()
    table.string('whatsapp').notNullable()
    table.string('bio').notNullable()
  })
}

// eslint-disable-next-line require-await
export async function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME)
}
