const assert = require('assert')
const { Developer, Manager, bonusVisitor } = require('../../../behavioral/visitor/visitor_es6')


describe('visitor es6 tests', () => {
  it('sanity', () => {
    const employees = []

    const john = new Developer(4000)
    const maria = new Developer(4000)
    const christian = new Manager(10000)

    employees.push(john)
    employees.push(maria)
    employees.push(christian)

    employees.forEach(e => {
      e.accept(bonusVisitor)
    })

    assert.strictEqual(john.bonus,4000)
    assert.strictEqual(christian.bonus,20000)
  })
})
