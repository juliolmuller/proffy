import express from 'express'
import ClassController from './controllers/ClassController'

const routes = express.Router()
const classCtrl = new ClassController()

routes.get('/', (req, res) => res.json({ message: 'Hello, there!' }))

routes.post('/classes', classCtrl.create)

export default routes
