import cors from 'cors';
import type express from 'express';

function register(app: express.Application): void {
  app.use(cors());
}

export default register;
