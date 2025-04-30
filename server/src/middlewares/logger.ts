import type express from 'express';
import morgan from 'morgan';

function register(app: express.Application): void {
  app.use(morgan('dev'));
}

export default register;
