const expect = require('chai').expect;
const droidProducer = require('../src/creational/abstract-factory/abstract-factory');
const droidProducer6 = require('../src/creational/abstract-factory/abstract-factory_es6');

describe('abstract factory test', () => {
    it('Battle droid', () => {
        var battleDroid = droidProducer('battle')();
        expect(battleDroid.info()).to.equal('B1, Battle Droid');
    });

    it('pilot droid', () => {
        var pilotDroid = droidProducer('pilot')();
        expect(pilotDroid.info()).to.equal('Rx24, Pilot Droid');
    });

    it('Battle droid es6', () => {
        var battleDroid = droidProducer6('battle')();
        expect(battleDroid.info()).to.equal('B1, Battle Droid');
    });

    it('pilot droid 6', () => {
        var pilotDroid = droidProducer6('pilot')();
        expect(pilotDroid.info()).to.equal('Rx24, Pilot Droid');
    });


});
