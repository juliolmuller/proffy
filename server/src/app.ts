import './config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'
import errorHandler from './errors/handler'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(routes)
app.use(errorHandler)

export default app
