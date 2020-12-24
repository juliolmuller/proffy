import Knex, { SchemaBuilder } from 'knex'

export const TABLE_NAME = 'classes'

export function up(knex: Knex): SchemaBuilder {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('id').primary()
    table.string('subject').notNullable()
    table.decimal('price').notNullable()
    table.bigInteger('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('cascade')
      .onDelete('cascade')
  })
}

export function down(knex: Knex): SchemaBuilder {
  return knex.schema.dropTable(TABLE_NAME)
}
