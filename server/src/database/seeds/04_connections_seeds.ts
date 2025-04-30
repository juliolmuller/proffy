import { type Knex } from 'knex';

import { TABLE_NAME as CLASSES_TABLE } from '../migrations/02_create_classes_table';
import { TABLE_NAME as CONNECTIONS_TABLE } from '../migrations/04_create_connections_table';
import { type ClassRecord } from './02_classes_seeds';

export interface ConnectionRecord {
  id: number;
  user_id: number;
}

export async function seed(knex: Knex): Promise<void> {
  const CONNECTIONS_PER_CLASS = 3;
  const classes: ClassRecord[] = await knex.from(CLASSES_TABLE);
  const connections: Partial<ConnectionRecord>[] = [];

  classes.forEach(({ user_id }) => {
    for (let i = 0; i < CONNECTIONS_PER_CLASS; i++) {
      connections.push({ user_id });
    }
  });

  await knex(CONNECTIONS_TABLE).del();
  await knex(CONNECTIONS_TABLE).insert(connections);
}
