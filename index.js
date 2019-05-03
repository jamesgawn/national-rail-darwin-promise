const Darwin = require('national-rail-darwin')

class Rail {
  constructor (apiKey, options) {
    this.apiKey = apiKey || process.env.DARWIN_TOKEN
    this.options = options

    this.darwin = new Darwin(this.apiKey, options)
  }
  async getDepartureBoard (station, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getDepartureBoard(station, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
  async getDepartureBoardWithDetails (station, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getDepartureBoardWithDetails(station, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
  async getArrivalsBoard (station, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getArrivalsBoard(station, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
  async getArrivalsBoardWithDetails (station, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getArrivalsBoardWithDetails(station, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
  async getServiceDetails (service) {
    return new Promise((resolve, reject) => {
      this.darwin.getServiceDetails(service, (err, result) => {
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
