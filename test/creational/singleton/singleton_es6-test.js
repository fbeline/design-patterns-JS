const assert = require('assert')
const Person = require('../../../creational/singleton/singleton_es6')

describe('singleton_es6 test', () => {
  it('sanity', () => {
    const john = new Person()
    const john2 = new Person()

    assert.strictEqual(john, john2)
    assert.strictEqual((john === john2), true)
  })
})
