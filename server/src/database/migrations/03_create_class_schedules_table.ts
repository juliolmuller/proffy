import { type Knex } from 'knex';

export const TABLE_NAME = 'class_schedules';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('id').primary();
    table.integer('weekday').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();
    table
      .bigInteger('class_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('classes')
      .onUpdate('cascade')
      .onDelete('cascade');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
