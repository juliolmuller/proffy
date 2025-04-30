import HttpStatus from 'http-status-codes';

import database from '../../../../database/connection';
import { type Controller } from '../../../http';

export const countConnectionsController: Controller = async (_request, response) => {
  const [{ total }] = await database('connections').count('* as total');

  response.status(HttpStatus.OK).json({ total });
};
