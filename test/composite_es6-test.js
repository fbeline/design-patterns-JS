const expect = require('chai').expect;

const [Cabbinet, FloppyDisk, HardDrive, Memory] = require('../src/structural/composite/composite_es6.js');


describe('composity tests', () => {

    it('sanity test', () => {
        var cabbinet = new Cabbinet();
        cabbinet.add(new FloppyDisk());
        cabbinet.add(new HardDrive());
        cabbinet.add(new Memory());

        expect(cabbinet.getPrice()).to.equal(600);
    });
});
