import { Request, Response } from 'express'
import HttpStatus from 'http-status-codes'
import database from '../database/connection'

class ConnectionController {

  async index(request: Request, response: Response) {
    const [{ total }] = await database('connections').count('* as total')

    response.status(HttpStatus.OK).json({ total })
  }

  async store(request: Request, response: Response) {
    // eslint-disable-next-line camelcase
    const { user: user_id } = request.body

    try {
      await database('connections').insert({ user_id })

      response.status(HttpStatus.CREATED).send()
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({
        // eslint-disable-next-line camelcase
        error: `Unable to store connection to user with ID #${user_id}.`,
      })
    }
  }
}

export default ConnectionController
