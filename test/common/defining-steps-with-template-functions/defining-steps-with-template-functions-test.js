const assert = require('assert')

const { LunarRover, JovianOrbiter } = require('../../../common/defining-steps-with-template-functions/defining-steps-with-template-functions')

describe('defining-steps-with-template-functions-test', () => {
  it('test', () => {
    const jadeRabbit = new LunarRover('Jade Rabbit')
    jadeRabbit.execute()

    const galileo = new JovianOrbiter('Galileo')
    const result = galileo.execute()

    assert.strictEqual(result, 'Destination: Jovian Orbit Playload: Orbiter with decent module. Lauched! Orbiter Will arrive in 7 years.')
  })
})
