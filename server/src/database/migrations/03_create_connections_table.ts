import Knex, { SchemaBuilder } from 'knex'

export function up(knex: Knex): SchemaBuilder {
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
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })
}

export function down(knex: Knex): SchemaBuilder {
  return knex.schema.dropTable('connections')
}
