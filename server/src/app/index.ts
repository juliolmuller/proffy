import './config';
import express from 'express';

import {
  registerCORS,
  registerErrorHandler,
  registerJsonParser,
  registerLogger,
  registerRoutes,
} from './http';

export const app = express();

registerCORS(app);
registerLogger(app);
registerJsonParser(app);

registerRoutes(app);
registerErrorHandler(app);

export default app;
