import express from 'express';

import { registerClassesRoutes } from '../modules/classes';
import { registerClassSchedulesRoutes } from '../modules/classSchedules';
import { registerConnectionsRoutes } from '../modules/connections';
import { registerUsersRoutes } from '../modules/users';

export function registerRoutes(app: express.Application): void {
  const router = express.Router();

  registerUsersRoutes('/users', router);
  registerClassesRoutes('/classes', router);
  registerConnectionsRoutes('/connections', router);
  registerClassSchedulesRoutes('class-schedules', router);

  app.use('/api', router);
}
