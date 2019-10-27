const assert = require('assert')

const { TrafficTower, Airplane } = require('../../../behavioral/mediator/mediator')

describe('mediator tests', () => {

  it('sanity', () => {
    test(TrafficTower, Airplane)
  })

})

function test(TrafficTower, AirPlane) {
  const trafficTower = new TrafficTower()
  const boeing1 = new AirPlane(10, trafficTower)
  const boeing2 = new AirPlane(15, trafficTower)
  const boeing3 = new AirPlane(55, trafficTower)

  assert.deepStrictEqual(boeing1.requestPositions(), [10, 15, 55])
  assert.deepStrictEqual(boeing2.requestPositions(), [10, 15, 55])
  assert.deepStrictEqual(boeing3.requestPositions(), [10, 15, 55])
}
