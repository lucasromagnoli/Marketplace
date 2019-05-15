const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/Mail')

class PurchaseController {
  async store (req, res) {
    const { adId, content } = req.body

    const purchaseAd = await Ad.findById(adId).populate('author -password')
    const user = await User.findById(req.userId)

    await Mail.sendMail({
      from: '"Lucas Romagnoli" <lucasr.romagnoli@gmail.com>"',
      to: purchaseAd.author.email,
      subject: `Solicitação de compra: ${purchaseAd.title}`,
      template: 'purchase',
      context: { user, content, ad: purchaseAd }
    })

    return res.send()
  }
}

module.exports = new PurchaseController()
