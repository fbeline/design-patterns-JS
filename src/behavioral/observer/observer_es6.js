class Product {
    constructor() {
        this.price = 0;
        this.actions = [];
    }

    setBasePrice(val) {
        this.price = val;
        this.notifyAll();
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions.remove.filter(function(el) {
            return el !== observer;
        });
    }

    notifyAll() {
        return this.actions.forEach(function(el) {
            el.update(this);
        }.bind(this));
    }
}

class fees {
    update(product) {
        product.price = product.price * 1.2;
    }
}

class proft {
    update(product) {
        product.price = product.price * 2;
    }
}

module.exports = [Product, fees, proft];
