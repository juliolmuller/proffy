import { type Knex } from 'knex';

import { TABLE_NAME as CLASSES_TABLE } from '../migrations/02_create_classes_table';
import { TABLE_NAME as SCHEDULES_TABLE } from '../migrations/03_create_class_schedules_table';
import { type ClassRecord } from './02_classes_seeds';

export interface ClassScheduleRecord {
  class_id: number;
  from: number;
  id: number;
  to: number;
  weekday: number;
}

export async function seed(knex: Knex): Promise<void> {
  const DAYS_IN_A_WEEK = 7;
  const HOURS_IN_A_DAY = 24;
  const MINUTES_IN_A_HOUR = 60;
  const SCHEDULES_PER_CLASS = 3;
  const classes: ClassRecord[] = await knex.from(CLASSES_TABLE);
  const schedules: Partial<ClassScheduleRecord>[] = [];

  classes.forEach((clazz) => {
    for (let i = 0; i < SCHEDULES_PER_CLASS; i++) {
      const weekday = Math.floor(Math.random() * DAYS_IN_A_WEEK);
      const time1 = Math.floor(Math.random() * HOURS_IN_A_DAY) * MINUTES_IN_A_HOUR;
      const time2 = Math.floor(Math.random() * HOURS_IN_A_DAY) * MINUTES_IN_A_HOUR;
      const from = Math.min(time1, time2);
      const to = Math.max(time1, time2);

      schedules.push({ weekday, from, to, class_id: clazz.id });
    }
  });

  await knex(SCHEDULES_TABLE).del();
  await knex(SCHEDULES_TABLE).insert(schedules);
}
