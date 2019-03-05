function Iterator(el) {
  this.index = 0;
  this.elements = el;
}

Iterator.prototype = {
  next: function() {
    return this.elements[this.index++];
  },
  hasNext: function() {
    return this.index < this.elements.length;
  }
};

module.exports = Iterator;
