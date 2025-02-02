import express from 'express'

import ClassController from '../../../controllers/ClassController'

function register(prefix: string, appRouter: express.Router) {
  const router = express.Router()
  const classCtrl = new ClassController()

  router.post('/', classCtrl.store)

  appRouter.use(prefix, router)
}

export default register
