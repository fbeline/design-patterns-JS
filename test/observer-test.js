const expect = require('chai').expect;
const [Prt, fes, pft] = require('../src/behavioral/observer/observer.js');
import { Product, fees, proft } from '../src/behavioral/observer/observer_es6';


describe('observer test', () => {

    it('sanity', () => {
        test(Prt, fes, pft);
    });

});

describe('observer es6 test', () => {

    it('sanity', () => {
        test(Product, new fees(), new proft());
    });

});


function test(Product, fees, proft) {
    const product = new Product();
    product.register(fees);
    product.register(proft);
    product.setBasePrice(100);
    expect(product.price).to.equal(240);
}
