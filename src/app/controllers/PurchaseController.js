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

    // if (ad.author.id === user.id) {
    //   return res
    //     .status(400)
    //     .json({ error: 'Não é possível comprar o próprio produto.' })
    // }

    const purchase = await Purchase.create({
      ad,
      user,
      content
    })

    Queue.create(PurchaseMail.key, {
      ad,
      user,
      content
    }).save()

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
