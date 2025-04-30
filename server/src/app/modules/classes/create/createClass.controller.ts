import HttpStatus from 'http-status-codes';

import database from '../../../../database/connection';
import parseTimeIntoMinutes from '../../../../utils/parseTimeIntoMinutes';
import { type Controller } from '../../../http';

interface FriendlySchedule {
  from: string;
  to: string;
  weekday: number;
}

const createClassController: Controller = async (request, response) => {
  const { name, avatar, whatsapp, bio, subject, price, schedule } = request.body;
  const transaction = await database.transaction();

  try {
    const [user_id] = await transaction('users').insert({ name, avatar, whatsapp, bio }, 'id');
    const [class_id] = await transaction('classes').insert({ subject, price, user_id }, 'id');

    await transaction('class_schedules').insert(
      schedule.map((sch: FriendlySchedule) => ({
        weekday: sch.weekday,
        from: parseTimeIntoMinutes(sch.from),
        to: parseTimeIntoMinutes(sch.to),
        class_id,
      })),
    );

    await transaction.commit();

    response.status(HttpStatus.CREATED).send();
  } catch (error) {
    transaction.rollback(error);
    throw error;
  }
};

export default createClassController;
