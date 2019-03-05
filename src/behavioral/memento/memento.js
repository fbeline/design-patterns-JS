function Memento(value) {
  this.value = value;
}

var originator = {
  store: function(val) {
    return new Memento(val);
  },
  restore: function(memento) {
    return memento.value;
  }
};

function Caretaker() {
  this.values = [];
}

Caretaker.prototype.addMemento = function(memento) {
  this.values.push(memento);
};

Caretaker.prototype.getMemento = function(index) {
  return this.values[index];
};

module.exports = [originator, Caretaker];
