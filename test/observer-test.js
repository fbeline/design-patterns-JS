const expect = require('chai').expect;
const [Product, fees, proft] = require('../src/behavioral/observer/observer.js');


describe('observer test', () => {

    it('sanity', () => {
        var product = new Product();
        product.register(fees);
        product.register(proft);

        product.setBasePrice(100);

        expect(product.price).to.equal(240);
    });

});
