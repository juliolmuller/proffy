import express from 'express';

import { countConnectionsController } from './count';
import { createConnectionController } from './create';

export function register(prefix: string, appRouter: express.Router): void {
  const router = express.Router();

  router.get('/', countConnectionsController);
  router.post('/', createConnectionController);

  appRouter.use(prefix, router);
}
