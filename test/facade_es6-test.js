const expect = require('chai').expect;

import ShopFacade from '../src/structural/facade/facade_es6';

describe('facade tests', () => {

    it('sanity', () => {
        const shop = new ShopFacade();
        const result = shop.calc(100);
        expect(result).to.equal(99.5);
    });

});
