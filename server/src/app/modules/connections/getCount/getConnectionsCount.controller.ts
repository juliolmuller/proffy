import HttpStatus from 'http-status-codes'

import database from '../../../../database/connection'
import { Controller } from '../../../http'

const getConnectionsCountController: Controller = async (request, response) => {
  const [{ total }] = await database('connections').count('* as total')

  response.status(HttpStatus.OK).json({ total })
}

export default getConnectionsCountController
