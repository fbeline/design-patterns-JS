const expect = require('chai').expect;

const shopFacade  = require('../src/structural/facade/facade');

describe('facade tests', () => {

    it('sanity', () => {
        var result = shopFacade.calc(100);
        expect(result).to.equal(99.5);
    });

});
