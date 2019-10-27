const assert = require('assert')

const { Cockpit, Turbine, OnCommand } = require('../../../behavioral/command/command_es6')

describe('command es6 tests', () => {

  it('turn off/on test', () => {
    const turbine = new Turbine()
    const onCommand = new OnCommand(turbine)
    const cockpit = new Cockpit(onCommand)
    cockpit.execute()
    assert.strictEqual(turbine.state, true)
  })
})
