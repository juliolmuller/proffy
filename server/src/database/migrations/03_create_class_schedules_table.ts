import Knex, { SchemaBuilder } from 'knex'

export const TABLE_NAME = 'class_schedules'

export function up(knex: Knex): SchemaBuilder {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('id').primary()
    table.integer('weekday').notNullable()
    table.integer('from').notNullable()
    table.integer('to').notNullable()
    table.bigInteger('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('cascade')
      .onDelete('cascade')
  })
}

export function down(knex: Knex): SchemaBuilder {
  return knex.schema.dropTable(TABLE_NAME)
}
