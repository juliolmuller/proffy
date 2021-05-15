import { Knex } from 'knex'

export const TABLE_NAME = 'class_schedules'

// eslint-disable-next-line require-await
export async function up(knex: Knex) {
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

// eslint-disable-next-line require-await
export async function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME)
}
