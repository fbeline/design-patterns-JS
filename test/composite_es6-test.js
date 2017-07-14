const expect = require('chai').expect;

import { Cabbinet, FloppyDisk, HardDrive, Memory } from '../src/structural/composite/composite_es6';


describe('composity tests', () => {

    it('sanity test', () => {
        const cabbinet = new Cabbinet();
        cabbinet.add(new FloppyDisk());
        cabbinet.add(new HardDrive());
        cabbinet.add(new Memory());

        expect(cabbinet.getPrice()).to.equal(600);
    });
});
