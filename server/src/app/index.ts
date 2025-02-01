import './config'
import 'express-async-errors'
import express from 'express'

import { registerCORS, registerJsonParser, registerLogger } from '../middlewares'
import { registerErrorHandler, registerRoutes } from './http'

const app = express()

registerCORS(app)
registerLogger(app)
registerJsonParser(app)

registerRoutes(app)
registerErrorHandler(app)

export default app
