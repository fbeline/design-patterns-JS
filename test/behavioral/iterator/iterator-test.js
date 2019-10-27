const assert = require('assert')

const Iterator = require('../../../behavioral/iterator/iterator')

const Iterator6 = require('../../../behavioral/iterator/iterator_es6')

describe('iterator tests', () => {

  it('sanity', () => {
    test(Iterator)
  })

})


describe('iterator es6 tests', () => {

  it('sanity', () => {
    test(Iterator6)
  })

})

function test(Iterator) {
  const numbers = new Iterator([1,2,3])

  assert.strictEqual(numbers.next(),1)
  assert.strictEqual(numbers.next(),2)
  assert.strictEqual(numbers.next(),3)
  assert.strictEqual(numbers.hasNext(), false)
}
