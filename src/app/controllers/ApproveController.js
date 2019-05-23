const Purchase = require('../models/Purchase')

class ApproveController {
  async update (req, res) {
    const { id } = req.params

    const { ad } = await Purchase.findById(id).populate({
      path: 'ad',
      populate: {
        path: 'author',
        select: 'name email'
      }
    })

    if (!ad.author._id.equals(req.userId)) {
      return res.status(401).json({ error: 'Você não é o autor deste anúncio' })
    }

    if (ad.purchasedBy) {
      return res.status(400).json({ error: 'Está propagada já foi comprada.' })
    }

    ad.purchasedBy = id

    await ad.save()

    return res.json(ad)
  }
}

module.exports = new ApproveController()
