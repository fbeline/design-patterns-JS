const assert = require('assert')

const shopFacade = require('../../../structural/facade/facade')

describe('facade tests', () => {

  it('sanity', () => {
    const result = shopFacade.calc(100)
    assert.strictEqual(result,99.5)
  })

})
