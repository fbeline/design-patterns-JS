const expect = require('chai').expect;
const BmwFactory = require('../src/creational/factory/factory_es6');

describe('factory es6 test', () => {
    it('sanity', () => {
        var bmwFactory = new BmwFactory();
        var x5 = bmwFactory.create('X5');
        var x6 = bmwFactory.create('X6');

        expect(x5.price).to.equal(108000);
        expect(x6.price).to.equal(111000);
        expect(x5.maxSpeed).to.equal(300);
        expect(x6.maxSpeed).to.equal(320);
    });
});
