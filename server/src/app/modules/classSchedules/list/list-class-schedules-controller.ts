import HttpStatus from 'http-status-codes';

import database from '../../../../database/connection';
import { parseTimeIntoMinutes } from '../../../../utils';
import { type Controller } from '../../../http';

interface QueryFilters {
  subject?: string;
  time?: string;
  weekday?: string;
}

export const listClassSchedulesController: Controller = async (request, response) => {
  const filters: QueryFilters = request.query;
  const timeInMinutes = parseTimeIntoMinutes(filters.time as string);

  if (!filters.weekday || !filters.subject || !filters.time) {
    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      error: 'Search filter(s) missing.',
    });
    return;
  }

  if (!timeInMinutes) {
    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      error: 'Invalid time format (expected hh:mm).',
    });
    return;
  }

  const classes = await database('classes')
    .where('classes.subject', '=', filters.subject)
    .select(['classes.*', 'users.*'])
    .join('users', 'classes.user_id', '=', 'users.id')
    .whereExists((query) => {
      query
        .select('class_schedules.*')
        .from('class_schedules')
        .whereRaw('class_schedules.class_id = classes.id')
        .whereRaw('class_schedules.weekday = ??', [Number(filters.weekday)])
        .whereRaw('class_schedules.from <= ??', [timeInMinutes])
        .whereRaw('class_schedules.to > ??', [timeInMinutes]);
    });

  response.status(HttpStatus.OK).json(classes);
};
