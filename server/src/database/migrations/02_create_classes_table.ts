import { Knex } from 'knex'

export const TABLE_NAME = 'classes'

// eslint-disable-next-line require-await
export async function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('id').primary()
    table.string('subject').notNullable()
    table.decimal('price').notNullable()
    table.bigInteger('user_id').notNullable().unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('cascade')
      .onDelete('cascade')
  })
}

// eslint-disable-next-line require-await
export async function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME)
}
