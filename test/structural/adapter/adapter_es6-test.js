const assert = require('assert')

const { Soldier, Jedi, JediAdapter } = require('../../../structural/adapter/adapter_es6')

describe('adapter_es6 tests', () => {

  it('sanity', () => {
    const stormtrooper = new Soldier(1)
    const yoda = new JediAdapter(new Jedi(10))
    assert.strictEqual(yoda.attack(),stormtrooper.attack() * 1000)
  })

})
