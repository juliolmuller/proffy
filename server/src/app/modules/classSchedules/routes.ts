import express from 'express';

import { listClassSchedulesController } from './list';

export function register(prefix: string, appRouter: express.Router): void {
  const router = express.Router();

  router.get('/', listClassSchedulesController);

  appRouter.use(prefix, router);
}
