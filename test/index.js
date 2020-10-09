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
      const apiKey = 'dummy-key'
      const options = {
        option1: true,
        option2: 'pies'
      }
      const rail = new Rail(apiKey, options)

      expect(rail.apiKey).to.equal(apiKey)
      expect(rail.options).to.deep.equal(options)
    })
    it('should accept API key from env var', () => {
      const apiKey = 'dummy-key'
      process.env.DARWIN_TOKEN = apiKey
      const rail = new Rail()

      expect(rail.apiKey).to.equal(apiKey)
    })
  })
  describe('getDepartureBoard', () => {
    it('should return results for valid station', async () => {
      const expectedResult = require('./examples/getDepartureBoard')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getDepartureBoard = fake
      const result = await rail.getDepartureBoard('GNW', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
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
      const expectedResult = require('./examples/getDepartureBoardWithDetails')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getDepartureBoardWithDetails = fake
      const result = await rail.getDepartureBoardWithDetails('GNW', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
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
      const expectedResult = require('./examples/getArrivalsBoard')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsBoard = fake
      const result = await rail.getArrivalsBoard('GNW', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
      rail.darwin.getArrivalsBoard = fake
      try {
        await rail.getArrivalsBoard('TEST', {})
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
  })
  describe('getArrivalsBoardWithDetails', () => {
    it('should return results for valid station', async () => {
      const expectedResult = require('./examples/getArrivalsBoardWithDetails')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsBoardWithDetails = fake
      const result = await rail.getArrivalsBoardWithDetails('GNW', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
      rail.darwin.getArrivalsBoardWithDetails = fake
      try {
        await rail.getArrivalsBoardWithDetails('TEST', {})
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
  })
  describe('getArrivalsDepartureBoard', () => {
    it('should return results for valid station', async () => {
      const expectedResult = require('./examples/getArrivalsDepartureBoard')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsDepartureBoard = fake
      const result = await rail.getArrivalsDepartureBoard('GNW', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
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
      const expectedResult = require('./examples/getArrivalsDepartureBoardWithDetails')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getArrivalsDepartureBoardWithDetails = fake
      const result = await rail.getArrivalsDepartureBoardWithDetails('GNW', {})
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
      rail.darwin.getArrivalsDepartureBoardWithDetails = fake
      try {
        await rail.getArrivalsDepartureBoardWithDetails('TEST', {})
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', {}, sinon.match.func)
    })
  })
  describe('getServiceDetails', () => {
    it('should return results for valid service', async () => {
      const expectedResult = require('./examples/getServiceDetails')
      const serviceId = 'PcxniJ81G487iKUC6gRhQA=='
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getServiceDetails = fake
      const result = await rail.getServiceDetails(serviceId)
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly(serviceId, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
      rail.darwin.getServiceDetails = fake
      try {
        await rail.getServiceDetails('TEST')
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', sinon.match.func)
    })
  })
  describe('getStationDetails', () => {
    it('should return results for valid service', async () => {
      const expectedResult = require('./examples/getStationDetails')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getStationDetails = fake
      const result = await rail.getStationDetails('GNW')
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
      rail.darwin.getStationDetails = fake
      try {
        await rail.getStationDetails('TEST')
      } catch (err) {
        expect(err).to.deep.equal(error)
      }
      expect(fake).to.be.calledWithExactly('TEST', sinon.match.func)
    })
  })
  describe('getNextDeparture', () => {
    it('should return results for valid from and to station with options specified', async () => {
      const expectedResult = require('./examples/getNextDepature')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getNextDeparture = fake
      const result = await rail.getNextDeparture('GNW', 'CST', { pies: true })
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', { pies: true }, sinon.match.func)
    })
    it('should return results for valid from and to station without options specified', async () => {
      const expectedResult = require('./examples/getNextDepature')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getNextDeparture = fake
      const result = await rail.getNextDeparture('GNW', 'CST')
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
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
      const expectedResult = require('./examples/getNextDepatureWithDetails')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getNextDepartureWithDetails = fake
      const result = await rail.getNextDepartureWithDetails('GNW', 'CST', { pies: true })
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', { pies: true }, sinon.match.func)
    })
    it('should return results for valid from and to station without options specified', async () => {
      const expectedResult = require('./examples/getNextDepatureWithDetails')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getNextDepartureWithDetails = fake
      const result = await rail.getNextDepartureWithDetails('GNW', 'CST')
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
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
      const expectedResult = require('./examples/getFastestDeparture')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getFastestDeparture = fake
      const result = await rail.getFastestDeparture('GNW', 'CST', { pies: true })
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', { pies: true }, sinon.match.func)
    })
    it('should return results for valid from and to station without options specified', async () => {
      const expectedResult = require('./examples/getFastestDeparture')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getFastestDeparture = fake
      const result = await rail.getFastestDeparture('GNW', 'CST')
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
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
      const expectedResult = require('./examples/getFastestDepartureWithDetails')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getFastestDepartureWithDetails = fake
      const result = await rail.getFastestDepartureWithDetails('GNW', 'CST', { pies: true })
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', { pies: true }, sinon.match.func)
    })
    it('should return results for valid from and to station without options specified', async () => {
      const expectedResult = require('./examples/getFastestDepartureWithDetails')
      const rail = new Rail()
      const fake = sinon.fake.yields(null, expectedResult)
      rail.darwin.getFastestDepartureWithDetails = fake
      const result = await rail.getFastestDepartureWithDetails('GNW', 'CST')
      expect(result).to.deep.equal(expectedResult)
      expect(fake).to.be.calledWithExactly('GNW', 'CST', {}, sinon.match.func)
    })
    it('should throw an error for an exception', async () => {
      const rail = new Rail()
      const error = {
        bang: true
      }
      const fake = sinon.fake.yields(error, null)
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
