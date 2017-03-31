const expect = require('chai').expect;
const Person = require('../src/creational/singleton/singleton_es6');

describe('singleton_es6 test', () => {
    it('sanity', () => {
        var john = new Person();
        var john2 = new Person();

        expect(john).to.equal(john2);
        expect(john === john2).to.be.true;
    });
});
