const assert = require('assert')

const { CarProxy, Driver } = require('../../../structural/proxy/proxy')

describe('proxy tests', () => {

  it('sanity', () => {
    const driver = new Driver(28)
    const kid = new Driver(10)

    let car = new CarProxy(driver)
    assert.strictEqual(car.drive(),'driving')

    car = new CarProxy(kid)
    assert.strictEqual(car.drive(),'too young to drive')
  })

})
