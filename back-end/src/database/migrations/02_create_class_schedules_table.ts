import Knex from 'knex'

export function up(knex: Knex) {
  return knex.schema.createTable('class_schedules', (table) => {
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

export function down(knex: Knex) {
  return knex.schema.dropTable('class_schedules')
}
