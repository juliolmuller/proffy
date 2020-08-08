import express from 'express'
import ClassController from './controllers/ClassController'
import ConnectionController from './controllers/ConnectionController'

const routes = express.Router()
const classCtrl = new ClassController()
const connectionCtrl = new ConnectionController()

routes.get('/', (req, res) => res.json({ message: 'Hello, there!' }))

routes.get('/classes', classCtrl.index)
routes.post('/classes', classCtrl.store)

routes.get('/connections', connectionCtrl.index)
routes.post('/connections', connectionCtrl.store)

export default routes
