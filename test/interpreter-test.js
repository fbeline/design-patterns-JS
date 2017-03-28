const expect = require('chai').expect;

const [Num, Min, Sum]  = require('../src/behavioral/interpreter/interpreter');

describe('interpreter tests', () => {

    it('sanity', () => {
        var result = new Sum(new Num(100), new Min(new Num(100), new Num(50)));
        expect(result.interpret()).to.equal(150);
    });
});
