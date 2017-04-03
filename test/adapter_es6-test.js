const expect = require('chai').expect;

const [Soldier, Jedi, JediAdapter] = require('../src/structural/adapter/adapter_es6');

describe('adapter_es6 tests', () => {

    it('sanity', () => {
        var stormtrooper = new Soldier(1);
        var yoda = new JediAdapter(new Jedi(10));
        expect(yoda.attack()).to.equal(stormtrooper.attack() * 1000);
    });

});
