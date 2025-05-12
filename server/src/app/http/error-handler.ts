import type express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export function registerErrorHandler(app: express.Application): void {
  app.use(((error, _req, res, _next): void => {
    console.error(error);

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }) satisfies express.ErrorRequestHandler);
}
