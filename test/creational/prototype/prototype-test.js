const assert = require('assert')
const Sheep = require('../../../creational/prototype/prototype')

describe('prototype test', () => {
  it('sanity', () => {
    const sheep = new Sheep('dolly', 10.3)
    const dolly = sheep.clone()
    assert.strictEqual(dolly.name, 'dolly')
  })
})
