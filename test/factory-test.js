const expect = require('chai').expect;
const bmwFactory = require('../src/creational/factory/factory');

describe('factory test', () => {
    it('sanity', () => {
        var x5 = bmwFactory('X5');
        var x6 = bmwFactory('X6');

        expect(x5.price).to.equal(108000);
        expect(x6.price).to.equal(111000);
        expect(x5.maxSpeed).to.equal(300);
        expect(x6.maxSpeed).to.equal(320);
        expect(x5.model).to.equal('X5');
        expect(x6.model).to.equal('X6');
    });
});