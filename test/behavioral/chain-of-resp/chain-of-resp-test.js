const assert = require('assert')

const { ShoppingCart, Discount } = require('../../../behavioral/chain-of-resp/chain-of-resp')

describe('chain of resp tests', () => {

  it(' > $ 500', () => {
    const discount = new Discount()

    const sc = new ShoppingCart()
    sc.addProduct(1000)

    const resp = discount.calc(sc.products)

    assert.strictEqual(resp, 0.1)
  })

  it('more than 3 products', () => {
    const discount = new Discount()

    const sc = new ShoppingCart()
    sc.addProduct(100)
    sc.addProduct(100)
    sc.addProduct(100)
    sc.addProduct(100)

    const resp = discount.calc(sc.products)

    assert.strictEqual(resp, 0.05)
  })

  it('more than 3 products and > $ 500 ', () => {
    const discount = new Discount()

    const sc = new ShoppingCart()
    sc.addProduct(1000)
    sc.addProduct(100)
    sc.addProduct(100)
    sc.addProduct(100)

    const resp = discount.calc(sc.products)

    assert.strictEqual(resp.toFixed(2), '0.15')
  })
})
