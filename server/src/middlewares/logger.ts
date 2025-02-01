import express from 'express'
import morgan from 'morgan'

function register(app: express.Application) {
  app.use(morgan('dev'))
}

export default register
