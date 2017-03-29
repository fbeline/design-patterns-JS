const expect = require('chai').expect;

const ShopFacade  = require('../src/structural/facade/facade_es6');

describe('facade tests', () => {

    it('sanity', () => {
        var shop = new ShopFacade();
        var result = shop.calc(100);
        expect(result).to.equal(99.5);
    });

});
