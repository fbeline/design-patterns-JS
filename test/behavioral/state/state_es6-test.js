const assert = require('assert')

const Order = require('../../../behavioral/state/state_es6')

describe('state_es6 tests', () => {

  it('sanity', () => {
    const order = new Order()
    assert.strictEqual(order.state.name,'waitingForPayment')
    order.nextState()
    assert.strictEqual(order.state.name,'shipping')
    order.nextState()
    assert.strictEqual(order.state.name,'delivered')
  })

})
