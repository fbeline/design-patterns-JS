function ShoppingCart() {
  this.products = []

  this.addProduct = function(p) {
    this.products.push(p)
  }
}

function Discount() {
  this.calc = function(products) {
    const ndiscount = new NumberDiscount()
    const pdiscount = new PriceDiscount()
    const none = new NoneDiscount()

    ndiscount.setNext(pdiscount)
    pdiscount.setNext(none)

    return ndiscount.exec(products)
  }
}

function NumberDiscount() {
  this.next = null
  this.setNext = function(fn) {
    this.next = fn
  }

  this.exec = function(products) {
    let result = 0
    if (products.length > 3)
      result = 0.05

    return result + this.next.exec(products)
  }
}

function PriceDiscount() {
  this.next = null
  this.setNext = function(fn) {
    this.next = fn
  }
  this.exec = function(products) {
    let result = 0
    const total = products.reduce(function(a, b) {
      return a + b
    })

    if (total >= 500)
      result = 0.1

    return result + this.next.exec(products)
  }
}

function NoneDiscount() {
  this.exec = function() {
    return 0
  }
}

module.exports = { ShoppingCart, Discount }
