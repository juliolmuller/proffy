import express from 'express'
import ClassController from './controllers/ClassController'
import ConnectionController from './controllers/ConnectionController'

const routes = express.Router()
const classCtrl = new ClassController()
const connectionCtrl = new ConnectionController()

routes.get('/api/classes', classCtrl.index)
routes.post('/api/classes', classCtrl.store)

routes.get('/api/connections', connectionCtrl.index)
routes.post('/api/connections', connectionCtrl.store)

export default routes
