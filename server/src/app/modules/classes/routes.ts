import express from 'express'

import { createClassController } from './create'

function register(prefix: string, appRouter: express.Router) {
  const router = express.Router()

  router.post('/', createClassController)

  appRouter.use(prefix, router)
}

export default register
