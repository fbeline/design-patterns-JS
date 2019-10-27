class ShoppingCart {
  constructor() {
    this.products = []
  }

  addProduct(p) {
    this.products.push(p)
  }
}

class Discount {
  calc(products) {
    const ndiscount = new NumberDiscount()
    const pdiscount = new PriceDiscount()
    const none = new NoneDiscount()
    ndiscount.setNext(pdiscount)
    pdiscount.setNext(none)
    return ndiscount.exec(products)
  }
}

class NumberDiscount {
  constructor() {
    this.next = null
  }

  setNext(fn) {
    this.next = fn
  }

  exec(products) {
    let result = 0
    if (products.length > 3)
      result = 0.05

    return result + this.next.exec(products)
  }
}

class PriceDiscount {
  constructor() {
    this.next = null
  }

  setNext(fn) {
    this.next = fn
  }

  exec(products) {
    let result = 0
    const total = products.reduce((a, b)=> a + b)

    if (total >= 500)
      result = 0.1

    return result + this.next.exec(products)
  }
}

class NoneDiscount {
  exec() {
    return 0
  }
}

module.exports = { ShoppingCart , Discount }
