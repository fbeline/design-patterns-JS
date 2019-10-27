const assert = require('assert')

const { ShoppingCart, guestStrategy, regularStrategy, premiumStrategy } = require('../../../behavioral/strategy/strategy_es6.js')


describe('strategy es6 tests', () => {

  it('guest test', () => {
    const guestCart = new ShoppingCart(guestStrategy)
    guestCart.setAmount(100)
    assert.strictEqual(guestCart.checkout(),100)
  })

  it('regular test', () => {
    const regularCart = new ShoppingCart(regularStrategy)
    regularCart.setAmount(100)
    assert.strictEqual(regularCart.checkout(),90)
  })

  it('premium test', () => {
    const premiumCart = new ShoppingCart(premiumStrategy)
    premiumCart.setAmount(100)
    assert.strictEqual(premiumCart.checkout(),80)
  })
})
