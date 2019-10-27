const assert = require('assert')
const { Prt, fes, pft } = require('../../../behavioral/observer/observer.js')
const { Product, Fees, Proft } = require('../../../behavioral/observer/observer_es6')

describe('observer test', () => {

  it('sanity', () => {
    const product = new Prt()
    product.register(fes)
    product.register(pft)
    product.setBasePrice(100)
    assert.strictEqual(product.price, 240)
  })

})

describe('observer es6 test', () => {

  it('sanity', () => {
    const product = new Product()
    product.register(new Fees())
    product.register(new Proft)
    product.setBasePrice(100)
    assert.strictEqual(product.price, 240)
  })

})
