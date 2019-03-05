var shopFacade = {
  calc: function(price) {
    price = discount(price);
    price = fees(price);
    price += shipping();
    return price;
  }
};

function discount(value) {
  return value * 0.9;
}

function shipping() {
  return 5;
}

function fees(value) {
  return value * 1.05;
}

module.exports = shopFacade;
