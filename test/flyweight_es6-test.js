const expect = require('chai').expect;

const ColorFactory = require('../src/structural/flyweight/flyweight_es6');

describe('flyweight_es6 tests', () => {

    it('sanity', () => {

        let red1 = ColorFactory.create('RED');
        let red2 = ColorFactory.create('RED');
        let red3 = ColorFactory.create('RED');
        let yellow1 = ColorFactory.create('YELLOW');
        let yellow2 = ColorFactory.create('YELLOW');
        expect(red1 === red2).to.be.true;
        expect(red1 === red3).to.be.true;
        expect(yellow1 === yellow2).to.be.true;
        expect(yellow1 === red1).to.be.false;
        expect(Object.keys(ColorFactory.colors)).to.have.lengthOf(2);
    });

});
