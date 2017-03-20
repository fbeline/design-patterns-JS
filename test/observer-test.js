const expect = require('chai').expect;
const [Product, fees, proft] = require('../src/behavioral/observer/observer.js');
const [Product6, fees6, proft6] = require('../src/behavioral/observer/observer_es6.js');


describe('observer test', () => {

    it('sanity', () => {
        test(Product, fees, proft);
    });

});

describe('observer es6 test', () => {

    it('sanity', () => {
        test(Product6, new fees6(), new proft6());
    });

});


function test(Product, fees, proft) {
    var product = new Product();
    product.register(fees);
    product.register(proft);
    product.setBasePrice(100);
    expect(product.price).to.equal(240);
}
