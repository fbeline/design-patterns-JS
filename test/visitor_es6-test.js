const expect = require('chai').expect;

const [Sum, Min, Num, Printer] = require('../src/behavioral/visitor/visitor_es6.js');


describe('visitor tests', () => {
    it('sanity', () => {
        expression = [new Num(10), new Sum(), new Num(5), new Min(), new Num(3)];

        result = "";
        expression.forEach(el => {
           result += el.accept(new Printer());
        });

        expect(result).to.equal("10 + 5 - 3");
    });
});
