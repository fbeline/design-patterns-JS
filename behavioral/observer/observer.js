function Product() {
  this.price = 0
  this.actions = []
}

Product.prototype.setBasePrice = function(val) {
  this.price = val
  this.notifyAll()
}

Product.prototype.register = function(observer) {
  this.actions.push(observer)
}

Product.prototype.unregister = function(observer) {
  this.actions.remove.filter(function(el) {
    return el !== observer
  })
}

Product.prototype.notifyAll = function() {
  return this.actions.forEach(function(el) {
    el.update(this)
  }.bind(this))
}

const fees = {
  update: function(product) {
    product.price = product.price * 1.2
  }
}

const proft = {
  update: function(product) {
    product.price = product.price * 2
  }
}

module.exports = { Prt: Product, fes: fees, pft: proft }
