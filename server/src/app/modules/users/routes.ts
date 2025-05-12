import express from 'express';

export function register(prefix: string, appRouter: express.Router): void {
  const router = express.Router();

  appRouter.use(prefix, router);
}
