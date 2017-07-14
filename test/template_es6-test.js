const expect = require('chai').expect;

import { Tax1, Tax2 } from '../src/behavioral/template/template_es6';

describe('template es6 tests', () => {

    it('sanity', () => {
        const tax1 = new Tax1();
        const tax2 = new Tax2();

        expect(tax1.calc(1000)).to.equal(1110);
        expect(tax2.calc(1000)).to.equal(1210);
        expect(tax2.calc(100)).to.equal(110);
    });

});
