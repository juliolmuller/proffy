import express from 'express'

function register(app: express.Application) {
  app.use(express.json())
}

export default register
