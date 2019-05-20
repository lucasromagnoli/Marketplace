const express = require('express')
const validate = require('express-validation')

const controllers = require('./app/controllers')
const validators = require('./app/validators')
const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.post(
  '/users',
  validate(validators.User),
  controllers.UserController.store
)
routes.post(
  '/sessions',
  validate(validators.Session),
  controllers.SessionController.store
)

routes.use(authMiddleware)

/**
 * Ads
 */

routes.get('/ads', controllers.AdController.index)
routes.post('/ads', validate(validators.Ad), controllers.AdController.store)
routes.put(
  '/ads/:id',
  validate(validators.AdUpdate),
  controllers.AdController.update
)
routes.delete(
  '/ads/:id',
  validate(validators.AdDestroy),
  controllers.AdController.destroy
)

/**
 * Purchase
 */

routes.post('/purchase', controllers.PurchaseController.store)

module.exports = routes
