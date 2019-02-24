const expect = require('chai').expect;

import { Cabinet, FloppyDisk, HardDrive, Memory } from '../src/structural/composite/composite_es6';


describe('composity tests', () => {

    it('sanity test', () => {
        const cabinet = new Cabinet();
        cabinet.add(new FloppyDisk());
        cabinet.add(new HardDrive());
        cabinet.add(new Memory());

        expect(cabinet.getPrice()).to.equal(600);
    });
});
