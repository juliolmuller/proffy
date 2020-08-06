import express from 'express'
import ClassController from './controllers/ClassController'

const routes = express.Router()
const classCtrl = new ClassController()

routes.get('/', (req, res) => res.json({ message: 'Hello, there!' }))

routes.get('/classes', classCtrl.index)
routes.post('/classes', classCtrl.store)

export default routes
