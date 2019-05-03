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
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getDepartureBoard = fake
      expect(rail.getDepartureBoard('TEST', {})).to.eventually.deep.equal(expectedResult)
      expect(fake).to.be.calledWith('TEST', {})
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getDepartureBoard = fake
      expect(rail.getDepartureBoard('TEST', {})).to.eventually.throw(error)
      expect(fake).to.be.calledWith('TEST')
    })
  })
  describe('getDepartureBoardWithDetails', () => {
    it('should return results for valid station', async () => {
      let expectedResult = require('./examples/getDepartureBoard')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getDepartureBoardWithDetails = fake
      expect(rail.getDepartureBoardWithDetails('TEST', {})).to.eventually.deep.equal(expectedResult)
      expect(fake).to.be.calledWith('TEST', {})
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getDepartureBoardWithDetails = fake
      expect(rail.getDepartureBoardWithDetails('TEST', {})).to.eventually.throw(error)
      expect(fake).to.be.calledWith('TEST')
    })
  })
  describe('getArrivalsBoard', () => {
    it('should return results for valid station', async () => {
      let expectedResult = require('./examples/getArrivalsBoard')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsBoard = fake
      expect(rail.getArrivalsBoard('GNW', {})).to.eventually.deep.equal(expectedResult)
      expect(fake).to.be.calledWith('GNW', {})
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getArrivalsBoard = fake
      expect(rail.getArrivalsBoard('TEST', {})).to.eventually.throw(error)
      expect(fake).to.be.calledWith('TEST')
    })
  })
  describe('getArrivalsBoardWithDetails', () => {
    it('should return results for valid station', async () => {
      let expectedResult = require('./examples/getArrivalsBoard')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsBoardWithDetails = fake
      expect(rail.getArrivalsBoardWithDetails('GNW', {})).to.eventually.deep.equal(expectedResult)
      expect(fake).to.be.calledWith('GNW', {})
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getArrivalsBoardWithDetails = fake
      expect(rail.getArrivalsBoardWithDetails('TEST', {})).to.eventually.throw(error)
      expect(fake).to.be.calledWith('TEST')
    })
  })
})
