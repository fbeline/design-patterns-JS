class Color {
  constructor(name) {
    this.name = name
  }
}

class colorFactory {
  constructor(name) {
    this.colors = {};
  }
  create(name) {
    let color = this.colors[name];
    if (color) return color;
    this.colors[name] = new Color(name);
    return this.colors[name];
  }
};

export {
  colorFactory
};
