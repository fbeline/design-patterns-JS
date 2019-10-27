const assert = require('assert')

const { Cockpit, Turbine, OnCommand, SpeedUpCommand } = require('../../../behavioral/command/command.js')

describe('command tests', () => {

  it('turn off/on test', () => {
    const turbine = new Turbine()
    const onCommand = new OnCommand(turbine)
    const cockpit = new Cockpit(onCommand)
    cockpit.execute()
    assert.strictEqual(turbine.state, true)
    assert.strictEqual(turbine.speed, 100)
  })

  it('speed up test', () => {
    const turbine = new Turbine()
    const onCommand = new OnCommand(turbine)
    const cockpit = new Cockpit(onCommand)
    cockpit.execute()

    const speedUpCommand = new SpeedUpCommand(turbine)
    const cockpitSecond = new Cockpit(speedUpCommand)
    cockpitSecond.execute()

    assert.strictEqual(turbine.speed,200)
  })
})
