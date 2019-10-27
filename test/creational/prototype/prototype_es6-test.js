const assert = require('assert')
const Sheep = require('../../../creational/prototype/prototype_es6')

describe('prototype_es6 test', () => {
  it('sanity', () => {
    const sheep = new Sheep('dolly', 10.3)
    const dolly = sheep.clone()
    const checkInstanceof = dolly instanceof Sheep
    assert.strictEqual(dolly.name,'dolly')
    assert.strictEqual(dolly.weight,10.3)
    assert.strictEqual(checkInstanceof, true)
    assert.strictEqual((dolly === sheep), false)
  })
})
