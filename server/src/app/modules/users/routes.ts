import express from 'express'

function register(prefix: string, appRouter: express.Router) {
  const router = express.Router()

  appRouter.use(prefix, router)
}

export default register
