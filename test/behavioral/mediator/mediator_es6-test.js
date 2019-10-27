const assert = require('assert')

const { TrafficTower, Airplane } = require('../../../behavioral/mediator/mediator_es6')

describe('mediator es6 tests', () => {


  it('sanity', () => {
    const trafficTower = new TrafficTower()
    const boeing1 = new Airplane(10, trafficTower)
    const boeing2 = new Airplane(15, trafficTower)
    const boeing3 = new Airplane(55, trafficTower)

    assert.deepStrictEqual(boeing1.requestPositions(), [10, 15, 55])
    assert.deepStrictEqual(boeing2.requestPositions(), [10, 15, 55])
    assert.deepStrictEqual(boeing3.requestPositions(), [10, 15, 55])
  })
})
