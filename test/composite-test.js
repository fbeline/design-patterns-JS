const expect = require('chai').expect;

const [EquipmentComposition, FloppyDisk, HardDrive, Memory] = require('../src/structural/composite/composite.js');


describe('composity tests', () => {

    it('sanity test', () => {
        var cabbinet = new EquipmentComposition("cabbinet");
        cabbinet.add(new FloppyDisk());
        cabbinet.add(new HardDrive());
        cabbinet.add(new Memory());

        expect(cabbinet.getPrice()).to.equal(600);
    });
});
