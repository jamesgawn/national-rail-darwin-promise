class Rail {
  constructor (apiKey, options) {
    this.apiKey = apiKey || process.env.DARWIN_TOKEN
    this.options = options
  }
}

module.exports = Rail
