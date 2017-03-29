const expect = require('chai').expect;

const colorFactory = require('../src/structural/flyweight/flyweight');

describe('flyweight tests', () => {

    it('sanity', () => {
        colorFactory.create('RED');
        colorFactory.create('RED');
        colorFactory.create('RED');
        colorFactory.create('YELLOW');
        colorFactory.create('YELLOW');
        expect(Object.keys(colorFactory.colors)).to.have.lengthOf(2);
    });

});
