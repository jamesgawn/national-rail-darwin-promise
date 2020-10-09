# national-rail-darwin-promise

![Node.js CI](https://github.com/jamesgawn/national-rail-darwin-promise/workflows/Node.js%20CI/badge.svg)

## Introduction

A promise based implementation to access the national rail's darwin soap based APIs that wraps the [national-rail-darwin library](https://github.com/mattsalt/national-rail-darwin) to expose a native promise interface.

### Installation

```
npm install national-rail-darwin-promise
```

### Usage

11 requests exposed by the Darwin api are available in `national-rail-darwin-promise`
* async getDepartureBoard(crsCode, options)
* async getDepartureBoardWithDetails(crsCode, options)
* async getArrivalsBoard(crsCode, options)
* async getArrivalsBoardWithDetails(crsCode, options)
* async getArrivalsDepartureBoard(crsCode, options)
* async getArrivalsDepartureBoardWithDetails(crsCode, options)
* async getNextDeparture(crsCode, destinationCrsCode, options)
* async getNextDepartureWithDetails(crsCode, destinationCrsCode, options)
* async getFastestDeparture(crsCode, destinationCrsCode, options)
* async getFastestDepartureWithDetails(crsCode, destinationCrsCode, options)
* async getServiceDetails(serviceId)

And a bonus method to get station details from CRS Code:
* async getStationDetails(crsCode)

Your api token can either be provided when the client is created or picked up from the environment variable `DARWIN_TOKEN`.

```
  var Rail = require('national-rail-darwin-promise')
  var rail = new Rail() // or -> new Rail(DARWIN_TOKEN)
```

###Methods

All methods return arrays of basic service objects of the form:
```
{
  sta: '23:57',
  eta: 'On time',
  std: '23:57',
  etd: 'On time',
  platform: '2',
  delayReason: null,
  origin: {
    name:<stationname>,
    crs:<crsCode>
  },
  destination: {
    name:<stationname>,
    crs:<crsCode>
  },
  length: '5',
  serviceId: 'xxxxxxxxxxxxxxxx+xx/xxx=='
}
```

#### getDepartureBoard
```
 let result = await rail.getDepartureBoard('GWN', {})
```
Gets all public departures for the supplied station within 2 hours. The options are:

* destination - Only show trains that call at the supplied station
* rows - Maximum number of services to retrieve (1 - 149)

#### getDepartureBoardWithDetails
```
 let result = await rail.getDepartureBoardWithDetails('GWN', {})
```
Gets all public departures for the supplied station within 2 hours, with a list of future calling points for each service. The options are:

* destination - Only show trains that call at the supplied station
* rows - Maximum number of services to retrieve (1 - 149)

#### getArrivalsBoard
```
 let result = await rail.getArrivalsBoard('GWN', {})
```

Gets all public arrivals for the supplied station within 2 hours. The options are:

* destination - Only show trains that have called at the supplied station.
* rows - Maximum number of services to retrieve.

#### getArrivalsBoardWithDetails
```
 let result = await rail.getArrivalsBoardWithDetails('GWN', {})
```
Gets all public arrivals for the supplied station within 2 hours, with a list of future calling points for each service. The options are:

* destination - Only show trains that call at the supplied station
* rows - Maximum number of services to retrieve (1 - 149)

#### getNextDeparture
```
 let result = await rail.getNextDeparture('GWN', {})
```
Returns the next train leaving from supplied station calling at the destination CRS Code.

#### getNextDepartureWithDetails
```
 let result = await rail.getNextDepartureWithDetails('GWN', {})
```
Returns the next train leaving from supplied station calling at the destination CRS Code, with a list of future calling points for the service.

#### getServiceDetails
```
 let result = await rail.getServiceDetails('kgjbae3a22a==')
```

Gets detailed information about a particular service relative to the station that generated the serviceId. ServiceId is returned from other calls such as getDepartureBoard or getNextDeparture. The object returns includes all calling points of the service requested. The data is only available while the particular service is showing on the station departure board. This is normally for up to two minutes after the service is expected to depart.

#### getStationDetails
```
 let result = await rail.getStationDetails('GNW')
```

Gets the full station details from the CRS Code 
