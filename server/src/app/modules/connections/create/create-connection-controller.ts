import HttpStatus from 'http-status-codes';

import database from '../../../../database/connection';
import { type Controller } from '../../../http';

export const createConnectionController: Controller = async (request, response) => {
  const { user: user_id } = request.body;

  await database('connections').insert({ user_id });

  response.status(HttpStatus.CREATED).send();
};
