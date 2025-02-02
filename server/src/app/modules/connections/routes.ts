import express from 'express'

import { createConnectionController } from './create'
import { getConnectionsCountController } from './getCount'

function register(prefix: string, appRouter: express.Router) {
  const router = express.Router()

  router.get('/', getConnectionsCountController)
  router.post('/', createConnectionController)

  appRouter.use(prefix, router)
}

export default register
