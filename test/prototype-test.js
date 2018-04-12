const expect = require('chai').expect;
import SheepES6 from '../src/creational/prototype/prototype_es6';
const Sheep = require('../src/creational/prototype/prototype');

describe('prototype_es6 test', () => {

    it('prototype_es6 test', () => {
        test(SheepES6);
    });

});

describe('prototype test', () => {
    it('prototype test', () => {
        test(Sheep);
    });
});

function test(Sheep) {
    let sheep = new Sheep('dolly', 10.3);
    let dolly = sheep.clone();
    expect(dolly.name).to.equal('dolly');
    expect(dolly.weight).to.equal(10.3);
    expect(dolly).to.be.instanceOf(Sheep);
    expect(dolly === sheep).to.be.false;
}