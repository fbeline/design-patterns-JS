const assert = require('assert')

const { Tax1, Tax2 } = require('../../../behavioral/template/template')

describe('template tests', () => {

  it('sanity', () => {
    const tax1 = new Tax1()
    const tax2 = new Tax2()

    assert.strictEqual(tax1.calc(1000),1110)
    assert.strictEqual(tax2.calc(1000),1210)
    assert.strictEqual(tax2.calc(100),110)
  })

})
