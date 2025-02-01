import express from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

function registerHandler(app:express.Application) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use(((error, _req, res, _next) => {
    console.error(error)

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
  }) satisfies express.ErrorRequestHandler)
}

export default registerHandler
