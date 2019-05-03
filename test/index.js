const { describe, it } = require('mocha')
const chai = require('chai')
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
      let result = await rail.getDepartureBoard('TEST', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getDepartureBoard = fake
      try {
        await rail.getDepartureBoard('TEST', {})
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
  })
  describe('getDepartureBoardWithDetails', () => {
    it('should return results for valid station', async () => {
      let expectedResult = require('./examples/getDepartureBoard')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getDepartureBoardWithDetails = fake
      let result = await rail.getDepartureBoardWithDetails('TEST', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getDepartureBoardWithDetails = fake
      try {
        await rail.getDepartureBoardWithDetails('TEST', {})
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
  })
  describe('getArrivalsBoard', () => {
    it('should return results for valid station', async () => {
      let expectedResult = require('./examples/getArrivalsBoard')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsBoard = fake
      let result = await rail.getArrivalsBoard('TEST', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getArrivalsBoard = fake
      try {
        await rail.getArrivalsBoard('TEST', {})
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
  })
  describe('getArrivalsDepartureBoard', () => {
    it('should return results for valid station', async () => {
      let expectedResult = require('./examples/getArrivalsDepartureBoard')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsDepartureBoard = fake
      let result = await rail.getArrivalsDepartureBoard('GNW', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getArrivalsDepartureBoard = fake
      try {
        await rail.getArrivalsDepartureBoard('TEST', {})
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
  })
  describe('getArrivalsDepartureBoardWithDetails', () => {
    it('should return results for valid station', async () => {
      let expectedResult = require('./examples/getArrivalsDepartureBoardWithDetails')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsDepartureBoardWithDetails = fake
      let result = await rail.getArrivalsDepartureBoardWithDetails('GNW', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getArrivalsDepartureBoardWithDetails = fake
      try {
        await rail.getArrivalsDepartureBoardWithDetails('TEST', {})
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
  })
  describe('getArrivalsBoardWithDetails', () => {
    it('should return results for valid station', async () => {
      let expectedResult = require('./examples/getArrivalsBoard')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsBoardWithDetails = fake
      let result = await rail.getArrivalsBoardWithDetails('TEST', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getArrivalsBoardWithDetails = fake
      try {
        await rail.getArrivalsBoardWithDetails('TEST', {})
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
  })
  describe('getServiceDetails', () => {
    it('should return results for valid service', async () => {
      let expectedResult = require('./examples/getServiceDetails')
      let serviceId = 'PcxniJ81G487iKUC6gRhQA=='
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getServiceDetails = fake
      let result = await rail.getServiceDetails(serviceId)
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly(serviceId, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getServiceDetails = fake
      try {
        await rail.getServiceDetails('TEST')
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', sinon.match.func)
    })
  })
  describe('getNextDeparture', () => {
    it('should return results for valid from and to station with options specified', async () => {
      let expectedResult = require('./examples/getNextDepature')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getNextDeparture = fake
      let result = await rail.getNextDeparture('GNW', 'CST', { pies: true })
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', { pies: true }, sinon.match.func)
    })
    it('should return results for valid from and to station without options specified', async () => {
      let expectedResult = require('./examples/getNextDepature')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getNextDeparture = fake
      let result = await rail.getNextDeparture('GNW', 'CST')
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getNextDeparture = fake
      try {
        await rail.getNextDeparture('TEST', 'TEST2')
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.deep.calledWithExactly('TEST', 'TEST2', {}, sinon.match.func)
    })
  })
  describe('getNextDepartureWithDetails', () => {
    it('should return results for valid from and to station with options specified', async () => {
      let expectedResult = require('./examples/getNextDepatureWithDetails')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getNextDepartureWithDetails = fake
      let result = await rail.getNextDepartureWithDetails('GNW', 'CST', { pies: true })
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', { pies: true }, sinon.match.func)
    })
    it('should return results for valid from and to station without options specified', async () => {
      let expectedResult = require('./examples/getNextDepatureWithDetails')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getNextDepartureWithDetails = fake
      let result = await rail.getNextDepartureWithDetails('GNW', 'CST')
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getNextDepartureWithDetails = fake
      try {
        await rail.getNextDepartureWithDetails('TEST', 'TEST2')
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.deep.calledWithExactly('TEST', 'TEST2', {}, sinon.match.func)
    })
  })
  describe('getFastestDeparture', () => {
    it('should return results for valid from and to station with options specified', async () => {
      let expectedResult = require('./examples/getFastestDeparture')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getFastestDeparture = fake
      let result = await rail.getFastestDeparture('GNW', 'CST', { pies: true })
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', { pies: true }, sinon.match.func)
    })
    it('should return results for valid from and to station without options specified', async () => {
      let expectedResult = require('./examples/getFastestDeparture')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getFastestDeparture = fake
      let result = await rail.getFastestDeparture('GNW', 'CST')
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getFastestDeparture = fake
      try {
        await rail.getFastestDeparture('TEST', 'TEST2')
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.deep.calledWithExactly('TEST', 'TEST2', {}, sinon.match.func)
    })
  })
  describe('getFastestDepartureWithDetails', () => {
    it('should return results for valid from and to station with options specified', async () => {
      let expectedResult = require('./examples/getFastestDepartureWithDetails')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getFastestDepartureWithDetails = fake
      let result = await rail.getFastestDepartureWithDetails('GNW', 'CST', { pies: true })
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', { pies: true }, sinon.match.func)
    })
    it('should return results for valid from and to station without options specified', async () => {
      let expectedResult = require('./examples/getFastestDepartureWithDetails')
      let rail = new Rail()
      let fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getFastestDepartureWithDetails = fake
      let result = await rail.getFastestDepartureWithDetails('GNW', 'CST')
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      let rail = new Rail()
      let error = {
        bang: true
      }
      let fake = sinon.fake.yields(error, null)
      rail.darwin.getFastestDepartureWithDetails = fake
      try {
        await rail.getFastestDepartureWithDetails('TEST', 'TEST2')
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.deep.calledWithExactly('TEST', 'TEST2', {}, sinon.match.func)
    })
  })
})
