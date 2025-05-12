import HttpStatus from 'http-status-codes';

import { prismaClient as database } from '../../../../database/connection';
import { type Controller } from '../../../http';

export const createConnectionController: Controller = async (request, response) => {
  const { user: userId } = request.body;

  await database.connection.create({
    data: {
      userId,
    },
  });

  response.status(HttpStatus.CREATED).send();
};
