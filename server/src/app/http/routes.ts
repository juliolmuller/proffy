import express from 'express';

import registerClassesRoutes from '../modules/classes/routes';
import registerClassSchedulesRoutes from '../modules/classSchedules/routes';
import connectionsRoutes from '../modules/connections/routes';
import usersRoutes from '../modules/users/routes';

function register(app: express.Application): void {
  const router = express.Router();

  registerClassSchedulesRoutes('class-schedules', router);
  registerClassesRoutes('/classes', router);
  connectionsRoutes('/connections', router);
  usersRoutes('/users', router);

  app.use('/api', router);
}

export default register;
