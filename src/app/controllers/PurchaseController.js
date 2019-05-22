const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async store (req, res) {
    const { adId, content } = req.body

    const ad = await Ad.findById(adId).populate('author -password')
    const user = await User.findById(req.userId)

    Queue.create(PurchaseMail.key, {
      ad,
      user,
      content
    }).save()

    const purchase = await Purchase.create({ ad, user, content })

    return res.json(purchase)
  }

  async update (req, res) {
    const ad = await Ad.findOne({ id: req.params.id })
    const purchase = await Purchase.find({
      ad: req.params.id
    })

    return res.json(purchase)
  }
}

module.exports = new PurchaseController()
