const assert = require('assert')

const { Num, Min, Sum } = require('../../../behavioral/interpreter/interpreter_es6')

describe('interpreter tests', () => {

  it('sanity', () => {
    const result = new Sum(new Num(100), new Min(new Num(100), new Num(50)))
    assert.strictEqual(result.interpret(),150)
  })
})
