const { describe, it } = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const sinon = require('sinon')
const expect = require('chai').expect
const Rail = require('../index')

describe('index', () => {
  describe('constructor', () => {
    it('should accept API key from constructor', () => {
      let apiKey = 'dummy-key'
      let options = {
        option1: true,
        option2: 'pies'
      }
      let rail = new Rail(apiKey, options)

      expect(rail.apiKey).to.equal(apiKey)
      expect(rail.options).to.deep.equal(options)
    })
    it('should accept API key from env var', () => {
      let apiKey = 'dummy-key'
      process.env['DARWIN_TOKEN'] = apiKey
      let rail = new Rail()

      expect(rail.apiKey).to.equal(apiKey)
    })
  })
  describe('getDepartureBoard', () => {
    it('should return results for valid station', async () => {
      let expectedResult = require('./examples/getDepartureBoard')
      let apiKey = 'dummy-key'
      let rail = new Rail(apiKey)
      let stub = sinon.stub()
      rail.darwin.getDepartureBoard = stub
      stub.resolves(expectedResult)
      expect(rail.getDepartureBoard('TEST', {})).to.eventually.deep.equal(expectedResult)
      expect(stub).to.be.calledWith('TEST', {})
    })
  })
  describe('getDepartureBoard', () => {
    it('should throw an error for an exception', async () => {
      let apiKey = 'dummy-key'
      let rail = new Rail(apiKey)
      let error = {
        bang: true
      }
      let stub = sinon.stub()
      rail.darwin.getDepartureBoard = stub
      stub.throws(error)
      expect(rail.getDepartureBoard('TEST', {})).to.eventually.throw(error)
      expect(stub).to.be.calledWith('TEST')
    })
  })
})
