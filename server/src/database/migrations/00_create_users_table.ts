import Knex, { SchemaBuilder } from 'knex'

export function up(knex: Knex): SchemaBuilder {
  return knex.schema.createTable('users', (table) => {
    table.bigIncrements('id').primary()
    table.string('name').notNullable()
    table.string('avatar').notNullable()
    table.string('whatsapp').notNullable()
    table.string('bio').notNullable()
  })
}

export function down(knex: Knex): SchemaBuilder {
  return knex.schema.dropTable('users')
}
