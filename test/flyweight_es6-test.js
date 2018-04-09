const expect = require('chai').expect;

const colorFactory = require('../src/structural/flyweight/flyweight_es6');

describe('flyweight tests', () => {

    it('sanity', () => {
        const cf = new colorFactory();
        cf.create('RED');
        cf.create('RED');
        cf.create('RED');
        cf.create('YELLOW');
        cf.create('YELLOW');
        expect(Object.keys(cf.colors)).to.have.lengthOf(2);
    });

});
