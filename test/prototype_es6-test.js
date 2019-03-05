const expect = require('chai').expect;
import Sheep from '../src/creational/prototype/prototype_es6';

describe('prototype_es6 test', () => {
  it('sanity', () => {
    var sheep = new Sheep('dolly', 10.3);
    var dolly = sheep.clone();
    expect(dolly.name).to.equal('dolly');
    expect(dolly.weight).to.equal(10.3);
    expect(dolly).to.be.instanceOf(Sheep);
    expect(dolly === sheep).to.be.false;
  });
});
