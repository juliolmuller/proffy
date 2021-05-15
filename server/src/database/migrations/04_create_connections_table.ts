import { Knex } from 'knex'

export const TABLE_NAME = 'connections'

// eslint-disable-next-line require-await
export async function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('id').primary()
    table.bigInteger('user_id').notNullable().unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('cascade')
      .onDelete('cascade')
    table.timestamp('created_at').notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })
}

// eslint-disable-next-line require-await
export async function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME)
}
