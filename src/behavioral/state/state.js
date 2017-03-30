function Order() {
    this.state = new WaintingForPayment();

    this.nextState = function() {
        this.state = this.state.next();
    };
}


function WaintingForPayment() {
    this.name = 'waitingForPayment';
    this.next = function() {
        return new Shipping();
    };
}

function Shipping() {
    this.name = 'shipping';
    this.next = function() {
        return new Delivered();
    };
}

function Delivered() {
    this.name = 'delivered';
    this.next = function() {
        return this;
    };
}

module.exports = Order;
