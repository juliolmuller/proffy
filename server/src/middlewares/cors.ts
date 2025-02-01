import cors from 'cors'
import express from 'express'

function register(app: express.Application) {
  app.use(cors())
}

export default register
