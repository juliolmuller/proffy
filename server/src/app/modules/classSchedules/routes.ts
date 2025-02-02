import express from 'express'

import { listClassSchedulesController } from './list'

function register(prefix: string, appRouter: express.Router) {
  const router = express.Router()

  router.get('/', listClassSchedulesController)

  appRouter.use(prefix, router)
}

export default register
