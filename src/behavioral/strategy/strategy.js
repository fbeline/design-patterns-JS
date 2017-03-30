function ShoppingCart(discount) {
    this.discount = discount;
    this.amount = 0;
}

ShoppingCart.prototype.setAmount = function(amount) {
    this.amount = amount;
};

ShoppingCart.prototype.checkout = function() {
   return this.discount(this.amount);
};

function guestStrategy(amount) {
    return amount;
}

function regularStrategy(amount) {
    return amount * 0.9;
}

function premiumStrategy(amount) {
    return amount * 0.8;
}

module.exports = [ShoppingCart, guestStrategy, regularStrategy, premiumStrategy];
