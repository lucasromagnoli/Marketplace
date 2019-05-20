const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(3)
      .max(20)
      .required()
  }
}
