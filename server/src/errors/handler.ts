import { ErrorRequestHandler } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const handler: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error(error)

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
}

export default handler
