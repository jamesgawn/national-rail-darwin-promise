# national-rail-darwin-promise

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![CircleCI](https://circleci.com/gh/jamesgawn/national-rail-darwin-promise.svg?style=svg)](https://circleci.com/gh/jamesgawn/national-rail-darwin-promise)

## Introduction

A promise based implementation to access the national rail's darwin soap based APIs that wraps the [national-rail-darwin library](https://github.com/mattsalt/national-rail-darwin) to expose a native promise interface.

### Installation

```
npm install national-rail-darwin-promise
```

### Usage

1 requests exposed by the Darwin api are available in `national-rail-darwin-promise`
- async getDepartureBoard(crsCode, options)

Your api token can either be provided when the client is created or picked up from the environment variable `DARWIN_TOKEN`.

```
  var Rail = require('national-rail-darwin-promise')
  var rail = new Rail() // or -> new Rail(DARWIN_TOKEN)
```

### Options

Some functions take an options object. See the specific method definitions for details of these.

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
 let result = await rail.getDepartureBoard('WAT', {})
```
Gets all public departures for the supplied station within 2 hours. The options are:

* destination - Only show trains that call at the supplied station
* rows - Maximum number of services to retrieve (1 - 149)