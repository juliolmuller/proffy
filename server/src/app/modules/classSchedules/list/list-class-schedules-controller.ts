import HttpStatus from 'http-status-codes';

import { prismaClient as prisma } from '../../../../database/connection';
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

  const classes = await prisma.class.findMany({
    where: {
      subject: filters.subject,
      classSchedules: {
        some: {
          weekday: Number(filters.weekday),
          from: {
            lte: timeInMinutes,
          },
          to: {
            gt: timeInMinutes,
          },
        },
      },
    },
    include: {
      user: true,
    },
  });

  response.status(HttpStatus.OK).send(
    JSON.stringify(
      classes.map((clazz) => ({
        id: clazz.id,
        subject: clazz.subject,
        price: clazz.price,
        user_id: clazz.userId,
        name: clazz.user.name,
        avatar: clazz.user.avatar,
        whatsapp: clazz.user.whatsapp,
        bio: clazz.user.bio,
      })),
      (_, v) => (typeof v === 'bigint' ? Number(v) : v),
      2,
    ),
  );
};
