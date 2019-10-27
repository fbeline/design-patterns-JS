class Product {
  constructor() {
    this.price = 0
    this.actions = []
  }

  setBasePrice(val) {
    this.price = val
    this.notifyAll()
  }

  register(observer) {
    this.actions.push(observer)
  }

  unregister(observer) {
    this.actions.remove.filter(function(el) {
      return el !== observer
    })
  }

  notifyAll() {
    return this.actions.forEach((el) => {
      el.update(this)
    })
  }
}

class Fees {
  update(product) {
    product.price = product.price * 1.2
  }
}

class Proft {
  update(product) {
    product.price = product.price * 2
  }
}

module.exports = { Product, Fees, Proft }
