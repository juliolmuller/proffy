import express from 'express';

import { createClassController } from './create';
import { listClassesController } from './list';

export function register(prefix: string, appRouter: express.Router): void {
  const router = express.Router();

  router.get('/', listClassesController);
  router.post('/', createClassController);

  appRouter.use(prefix, router);
}

export default register;
