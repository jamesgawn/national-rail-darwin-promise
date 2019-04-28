const Darwin = require('national-rail-darwin')

class Rail {
  constructor (apiKey, options) {
    this.apiKey = apiKey || process.env.DARWIN_TOKEN
    this.options = options

    this.darwin = new Darwin(this.apiKey, options)
  }
  async getDepartureBoard (departureStation, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getDepartureBoard(departureStation, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}

module.exports = Rail
