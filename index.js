const Darwin = require('national-rail-darwin')

class Rail {
  constructor (apiKey, options) {
    this.apiKey = apiKey || process.env.DARWIN_TOKEN
    this.options = options

    this.darwin = new Darwin(this.apiKey, options)
  }

  async getDepartureBoard (crsCode, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getDepartureBoard(crsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getDepartureBoardWithDetails (crsCode, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getDepartureBoardWithDetails(crsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getArrivalsBoard (crsCode, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getArrivalsBoard(crsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getArrivalsBoardWithDetails (crsCode, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getArrivalsBoardWithDetails(crsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getArrivalsDepartureBoard (crsCode, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getArrivalsDepartureBoard(crsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getArrivalsDepartureBoardWithDetails (crsCode, options) {
    return new Promise((resolve, reject) => {
      this.darwin.getArrivalsDepartureBoardWithDetails(crsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getNextDeparture (crsCode, destinationCrsCode, options) {
    if (typeof options === 'undefined') options = {}
    return new Promise((resolve, reject) => {
      this.darwin.getNextDeparture(crsCode, destinationCrsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getNextDepartureWithDetails (crsCode, destinationCrsCode, options) {
    if (typeof options === 'undefined') options = {}
    return new Promise((resolve, reject) => {
      this.darwin.getNextDepartureWithDetails(crsCode, destinationCrsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getFastestDeparture (crsCode, destinationCrsCode, options) {
    if (typeof options === 'undefined') options = {}
    return new Promise((resolve, reject) => {
      this.darwin.getFastestDeparture(crsCode, destinationCrsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getFastestDepartureWithDetails (crsCode, destinationCrsCode, options) {
    if (typeof options === 'undefined') options = {}
    return new Promise((resolve, reject) => {
      this.darwin.getFastestDepartureWithDetails(crsCode, destinationCrsCode, options, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getServiceDetails (serviceId) {
    return new Promise((resolve, reject) => {
      this.darwin.getServiceDetails(serviceId, (err, result) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getStationDetails (crsCode) {
    return new Promise((resolve, reject) => {
      this.darwin.getStationDetails(crsCode, (err, result) => {
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
