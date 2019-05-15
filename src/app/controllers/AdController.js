const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    const ads = await Ad.find().populate('author', 'name email')

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
