const expect = require('chai').expect;
const droidProducer = require('../src/creational/abstract-factory/abstract-factory');
import droidProducer6 from '../src/creational/abstract-factory/abstract-factory_es6';

describe('abstract factory test', () => {
  it('Battle droid', () => {
    const battleDroid = droidProducer('battle')();
    expect(battleDroid.info()).to.equal('B1, Battle Droid');
  });

  it('pilot droid', () => {
    const pilotDroid = droidProducer('pilot')();
    expect(pilotDroid.info()).to.equal('Rx24, Pilot Droid');
  });

  it('Battle droid es6', () => {
    const battleDroid = droidProducer6('battle')();
    expect(battleDroid.info()).to.equal('B1, Battle Droid');
  });

  it('pilot droid 6', () => {
    const pilotDroid = droidProducer6('pilot')();
    expect(pilotDroid.info()).to.equal('Rx24, Pilot Droid');
  });

});
