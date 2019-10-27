const assert = require('assert')
const bmwFactory = require('../../../creational/factory/factory')

describe('factory test', () => {
  it('sanity', () => {
    const x5 = bmwFactory('X5')
    const x6 = bmwFactory('X6')

    assert.strictEqual(x5.price, 108000)
    assert.strictEqual(x6.price, 111000)
    assert.strictEqual(x5.maxSpeed, 300)
    assert.strictEqual(x6.maxSpeed, 320)
  })
})
