const express = require('express')

const controllers = require('./app/controllers')
const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.get('/teste', authMiddleware, (req, res) => {
  return res.json({ id: req.userId })
})
routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)
module.exports = routes
