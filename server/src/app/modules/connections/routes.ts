import express from 'express'

import ConnectionController from '../../../controllers/ConnectionController'

function register(prefix: string, appRouter: express.Router) {
  const router = express.Router()
  const connectionCtrl = new ConnectionController()

  router.get('/', connectionCtrl.index)
  router.post('/', connectionCtrl.store)

  appRouter.use(prefix, router)
}

export default register
