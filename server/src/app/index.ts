import './config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import morgan from 'morgan'

import { registerErrorHandler, registerRoutes } from './http'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

registerRoutes(app)
registerErrorHandler(app)

export default app
