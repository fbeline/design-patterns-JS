class Mission {
  constructor() {
    this._name = String
    this._rocket = Rocket
    this._payload = Payload
    this._destination = Destination
  }

  set name(name) {
    if (!(name instanceof String)) {
      throw new Error('name should be instance of String')
    }
    this._name = name
  }

  get name() {
    return this._name
  }

  set rocket(rocket) {
    if (!(rocket instanceof Rocket)) {
      throw new Error('rocket should be instance of Rocket')
    }
    this._rocket = rocket
  }

  get rocket() {
    return this._rocket
  }

  set payload(payload) {
    if (!(payload instanceof Payload)) {
      throw new Error('payload should be instance of Payload')
    }
    this._payload = payload
  }

  get payload() {
    return this._payload
  }

  set destination(destination) {
    if (!(destination instanceof Destination)) {
      throw new Error('destination should be instance of Destination')
    }
    this._destination = destination
  }

  get destination() {
    return this._destination
  }

  build(name, rocket, payload, destination) {
    this.name = name
    this.rocket = rocket
    this.payload = payload
    this.destination = destination
  }

  describe() {
    return `The ${this.name} mission will be launched by a ${this.rocket.name} rocket, and deliver a ${this.payload.name} to ${this.destination.name}.`
  }
}

class Rocket {
  constructor(name) {
    this.name = name
  }
}

class Payload {
  constructor(name) {
    this.name = name
  }
}

class Destination {
  constructor(name) {
    this.name = name
  }
}

module.exports = { Mission, Rocket, Payload, Destination }
