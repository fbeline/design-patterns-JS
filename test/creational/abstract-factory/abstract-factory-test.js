const assert = require('assert')

const droidProducer = require('../../../creational/abstract-factory/abstract-factory')
const droidProducer6 = require('../../../creational/abstract-factory/abstract-factory_es6')

describe('abstract factory test', () => {
  it('Battle droid', () => {
    const battleDroid = droidProducer('battle')()
    assert.strictEqual(battleDroid.info(), 'B1, Battle Droid')
  })

  it('pilot droid', () => {
    const pilotDroid = droidProducer('pilot')()
    assert.strictEqual(pilotDroid.info(), 'Rx24, Pilot Droid')
  })

  it('Battle droid es6', () => {
    const battleDroid = droidProducer6('battle')()
    assert.strictEqual(battleDroid.info(), 'B1, Battle Droid')
  })

  it('pilot droid 6', () => {
    const pilotDroid = droidProducer6('pilot')()
    assert.strictEqual(pilotDroid.info(), 'Rx24, Pilot Droid')
  })
})
