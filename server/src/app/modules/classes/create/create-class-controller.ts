import HttpStatus from 'http-status-codes';

import { prismaClient as database } from '../../../../database/connection';
import { parseTimeIntoMinutes } from '../../../../utils';
import { type Controller } from '../../../http';

interface FriendlySchedule {
  from: string;
  to: string;
  weekday: number;
}

export const createClassController: Controller = async (request, response) => {
  const { name, avatar, whatsapp, bio, subject, price, schedule } = request.body;

  await database.$transaction(async (database) => {
    const createdUser = await database.user.create({
      data: {
        name,
        avatar,
        whatsapp,
        bio,
      },
    });
    const createdClass = await database.class.create({
      data: {
        userId: createdUser.id,
        subject,
        price,
      },
    });

    await database.classSchedule.createMany({
      data: schedule.map((sch: FriendlySchedule) => ({
        classId: createdClass.id,
        weekday: sch.weekday,
        from: parseTimeIntoMinutes(sch.from),
        to: parseTimeIntoMinutes(sch.to),
      })),
    });
  });

  response.status(HttpStatus.CREATED).send();
};
