const expect = require('chai').expect;
const [Prt, fes, pft] = require('../src/behavioral/observer/observer.js');
import { Product, fees, proft } from '../src/behavioral/observer/observer_es6';


describe('observer test', () => {

    it('sanity register', () => {
        register(Prt, fes, pft);
    });

    it('sanity unregister', () => {
        unregister(Prt, fes, pft);
    });
});

describe('observer es6 test', () => {

    it('sanity register', () => {
        register(Product, new fees(), new proft());
    });

    it('sanity unregister', () => {
        unregister(Product, new fees(), new proft());
    });

});


function register(Product, fees, proft) {
    const product = new Product();
    product.register(fees);
    product.register(proft);
    product.setBasePrice(100);
    expect(product.price).to.equal(240);
}


function unregister(Product, fees, proft) {
    const product = new Product();
    product.register(fees);
    product.register(proft);
    product.unregister(proft);
    product.setBasePrice(100);
    expect(product.price).to.equal(120);
}