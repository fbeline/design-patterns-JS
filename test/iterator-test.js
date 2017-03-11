const expect = require('chai').expect;

const Iterator = require('../src/behavioral/iterator/iterator');


describe('iterator tests', () => {

    it('sanity', () => {
        var numbers = new Iterator([1,2,3]);

        expect(numbers.next()).to.equal(1);
        expect(numbers.next()).to.equal(2);
        expect(numbers.next()).to.equal(3);
        expect(numbers.hasNext()).to.false;
    });

});

