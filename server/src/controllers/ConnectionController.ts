import { Request, Response } from 'express'
import HttpStatus from 'http-status-codes'
import database from '../database/connection'

class ConnectionController {

  async index(request: Request, response: Response): Promise<void> {
    const [{ total }] = await database('connections').count('* as total')

    response.status(HttpStatus.OK).json({ total })
  }

  async store(request: Request, response: Response): Promise<void> {
    const { user: user_id } = request.body

    await database('connections').insert({ user_id })

    response.status(HttpStatus.CREATED).send()
  }
}

export default ConnectionController
