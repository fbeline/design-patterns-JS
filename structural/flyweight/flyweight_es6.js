class Color {
  constructor(name) {
    this.name = name
  }
}

class colorFactory {
  constructor() {
    this.colors = {}
  }
  create(name) {
    const color = this.colors[name]
    if (color) return color
    this.colors[name] = new Color(name)
    return this.colors[name]
  }
}

module.exports = { colorFactory }
