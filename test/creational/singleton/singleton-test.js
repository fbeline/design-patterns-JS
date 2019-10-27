const assert = require('assert')
const Person = require('../../../creational/singleton/singleton')

describe('singleton test', () => {
  it('sanity', () => {
    const john = new Person()
    const john2 = new Person()

    assert.strictEqual(john, john2)
  })
})
