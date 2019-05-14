const express = require('express')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.get('/teste', authMiddleware, (req, res) => {
  return res.json({ id: req.userId })
})
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
module.exports = routes
