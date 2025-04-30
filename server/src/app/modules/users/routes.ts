import express from 'express';

function register(prefix: string, appRouter: express.Router): void {
  const router = express.Router();

  appRouter.use(prefix, router);
}

export default register;
