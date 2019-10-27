const assert = require('assert')
const { Mission, Rocket, Payload, Destination } = require('../../../creational/builder-with-customized-instances/builder-with-customized-instances')

describe('builder-with-customized-instances', () => {
  it('should build and describe correct', () => {
    const data = {
      name: 'Jade Rabbit',
      rocket: 'Long March 3B Y-23',
      payload: 'Lunar Rover',
      destination: 'Oceanus Procellarum',
    }

    const mission = new Mission()

    mission.build(
      new String(data.name),
      new Rocket(data.rocket),
      new Payload(data.payload),
      new Destination(data.destination)
    )

    const result = mission.describe()

    assert.strictEqual(result, `The ${data.name} mission will be launched by a ${data.rocket} rocket, and deliver a ${data.payload} to ${data.destination}.`)
  })
})
