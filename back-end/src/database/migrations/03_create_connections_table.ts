import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', (table) => {
    table.bigIncrements('id').primary()

    table.bigInteger('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade')

    table.timestamp('created_at')
        .notNullable()
        .defaultTo('now()')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections')
}
