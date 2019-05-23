const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    const filters = { purchasedBy: null }

    if (req.query.price_min || req.query.price_max) {
      filters.price = {}

      if (req.query.price_min) {
        filters.price.$gte = req.query.price_min
      }

      if (req.query.price_max) {
        filters.price.$lte = req.query.price_max
      }
    }

    if (req.query.title) {
      filters.title = new RegExp(req.query.title, 'i')
    }

    const ads = await Ad.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: [{ path: 'author', select: 'name email' }],
      sort: '-createdAt'
    })

    return res.json(ads)
  }
  async show () {}

  async store (req, res) {
    const ad = await Ad.create({ ...req.body, author: req.userId })

    return res.json(ad)
  }

  async update (req, res) {
    const ad = await Ad.findOneAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(ad)
  }

  async destroy (req, res) {
    const ad = await Ad.findOneAndDelete(req.params.id)

    res.json({ msg: `Propaganda [${ad.title}] excluida com sucesso!` })
  }
}

module.exports = new AdController()
