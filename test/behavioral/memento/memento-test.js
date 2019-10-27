const assert = require('assert')

const { originator, Caretaker } = require('../../../behavioral/memento/memento')

describe('memento tests', () => {

  it('sanity', () => {
    const careTaker = new Caretaker()
    careTaker.addMemento(originator.store('hello'))
    careTaker.addMemento(originator.store('hello world'))
    careTaker.addMemento(originator.store('hello world !!!'))


    const result = originator.restore(careTaker.getMemento(1))
    assert.strictEqual(result, 'hello world')
  })

})
