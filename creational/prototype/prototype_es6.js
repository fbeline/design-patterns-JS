class Sheep {
  constructor(name, weight) {
    this.name = name
    this.weight = weight
  }

  clone() {
    return new Sheep(this.name, this.weight)
  }
}

module.exports = Sheep
