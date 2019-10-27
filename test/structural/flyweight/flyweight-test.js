const assert = require('assert')

const colorFactory = require('../../../structural/flyweight/flyweight')

describe('flyweight tests', () => {

  it('sanity', () => {
    colorFactory.create('RED')
    colorFactory.create('RED')
    colorFactory.create('RED')
    colorFactory.create('YELLOW')
    colorFactory.create('YELLOW')
    assert.strictEqual(Object.keys(colorFactory.colors).length, 2)
  })

})
