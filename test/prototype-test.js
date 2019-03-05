const expect = require('chai').expect;
const Sheep = require('../src/creational/prototype/prototype');

describe('prototype test', () => {
  it('sanity', () => {
    var sheep = new Sheep('dolly', 10.3);
    var dolly = sheep.clone();
    expect(dolly.name).to.equal('dolly');
  });
});
