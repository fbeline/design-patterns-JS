const assert = require('assert')

const { Soldier, Jedi, JediAdapter } = require('../../../structural/adapter/adapter.js')

describe('adapter tests', () => {

  it('sanity', () => {
    const stormtrooper = new Soldier(1)
    const yoda = new JediAdapter(new Jedi(10))
    assert.strictEqual(yoda.attack(),stormtrooper.attack() * 1000)
  })
})
