const expect = require('chai').expect;

const [EquipmentComposition, FloppyDisk, HardDrive, Memory] = require('../src/structural/composite/composite.js');


describe('composity tests', () => {

    it('sanity test', () => {
        var cabinet = new EquipmentComposition("cabinet");
        cabinet.add(new FloppyDisk());
        cabinet.add(new HardDrive());
        cabinet.add(new Memory());

        expect(cabinet.getPrice()).to.equal(600);
    });
});
