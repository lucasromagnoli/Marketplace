const Joi = require('joi')

module.exports = {
  params: {
    id: Joi.string().required()
  },
  body: {
    title: Joi.string(),
    descrition: Joi.string(),
    price: Joi.number()
  }
}
