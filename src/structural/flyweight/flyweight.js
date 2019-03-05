function Color(name) {
  this.name = name;
}

var colorFactory = {
  colors: {},
  create: function(name) {
    var color = this.colors[name];
    if (color) return color;

    this.colors[name] = new Color(name);
    return this.colors[name];
  }
};

module.exports = colorFactory;
