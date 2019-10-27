const assert = require('assert')

const { colorFactory } = require('../../../structural/flyweight/flyweight_es6')

describe('flyweight tests', () => {

  it('sanity', () => {
    const cf = new colorFactory()
    cf.create('RED')
    cf.create('RED')
    cf.create('RED')
    cf.create('YELLOW')
    cf.create('YELLOW')
    assert.strictEqual(Object.keys(cf.colors).length, 2)
  })

})
