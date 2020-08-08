import Knex from 'knex'

export function up(knex: Knex) {
  return knex.schema.createTable('classes', (table) => {
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

export function down(knex: Knex) {
  return knex.schema.dropTable('classes')
}
