const assert = require('assert')

const ShopFacade = require('../../../structural/facade/facade_es6')

describe('facade tests', () => {

  it('sanity', () => {
    const shop = new ShopFacade()
    const result = shop.calc(100)
    assert.strictEqual(result,99.5)
  })

})
