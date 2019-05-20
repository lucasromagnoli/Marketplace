class TestErrorController {
  do (req, res) {
    throw Error()
  }
}

module.exports = new TestErrorController()
