import HttpStatus from 'http-status-codes';

import { prismaClient as database } from '../../../../database';
import { type Controller } from '../../../http';

export const countConnectionsController: Controller = async (_request, response) => {
  const total = await database.connection.count();

  response.status(HttpStatus.OK).json({ total });
};
