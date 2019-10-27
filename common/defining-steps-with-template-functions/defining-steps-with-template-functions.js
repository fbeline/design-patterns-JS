/**
 * ./README.md
 * Данный шалон реализует принципы ООП:
 *  инкапсуляция,
 *  наследование,
 *  полиморфизм
 */

class Mission {
  constructor() {
    if (this.constructor === Mission) {
      throw new Error('Миссия - абстрактный класс, должен расширяться')
    }
  }

  /** @public */
  execute() {
    this._determinDestination()
    this._determinePayload()
    return this._launch()
  }
}

class LunarRover extends Mission {
  constructor(name) {
    super()
    this.name = name
  }

  /**
   * определить пункт назначения
   * @private
   */
  _determinDestination() {
    this.destination = 'Oceanus Procellarum'
  }

  /**
   * определить полезную нагрузку
   * @private
   */
  _determinePayload() {
    this.payload = 'Rover with camera and mass spectrometer.'
  }

  /** @private */
  _launch() {
    return `Destination: ${this.destination} Playload: ${this.payload} Lauched! Rover Will arrive in a week.`
  }
}

class JovianOrbiter extends Mission {
  constructor(name) {
    super()
    this.name = name
  }

  /**
   * определить пункт назначения
   * @private
   */
  _determinDestination() {
    this.destination = 'Jovian Orbit' // Юпитер орбита
  }

  /**
   * определить полезную нагрузку
   * @private
   */
  _determinePayload() {
    this.payload = 'Orbiter with decent module.'
  }

  _launch() {
    return `Destination: ${this.destination} Playload: ${this.payload} Lauched! Orbiter Will arrive in 7 years.`
  }
}

module.exports = { LunarRover, JovianOrbiter }
