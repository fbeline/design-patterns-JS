const assert = require('assert')
const BmwFactory = require('../../../creational/factory/factory_es6')

describe('factory es6 test', () => {
  it('sanity', () => {
    const bmwFactory = new BmwFactory()
    const x5 = bmwFactory.create('X5')
    const x6 = bmwFactory.create('X6')

    assert.strictEqual(x5.price,108000)
    assert.strictEqual(x6.price,111000)
    assert.strictEqual(x5.maxSpeed,300)
    assert.strictEqual(x6.maxSpeed,320)
  })
})
