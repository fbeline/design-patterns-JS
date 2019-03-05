const expect = require('chai').expect;

const [Soldier, Jedi, JediAdapter] = require('../src/structural/adapter/adapter.js');

describe('adapter tests', () => {

  it('sanity', () => {
    var stormtrooper = new Soldier(1);
    var yoda = new JediAdapter(new Jedi(10));
    expect(yoda.attack()).to.equal(stormtrooper.attack() * 1000);
  });

});
