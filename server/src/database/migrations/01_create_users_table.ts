import Knex, { SchemaBuilder } from 'knex'

export const TABLE_NAME = 'users'

export function up(knex: Knex): SchemaBuilder {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('id').primary()
    table.string('name').notNullable()
    table.string('avatar').notNullable()
    table.string('whatsapp').notNullable()
    table.string('bio').notNullable()
  })
}

export function down(knex: Knex): SchemaBuilder {
  return knex.schema.dropTable(TABLE_NAME)
}
