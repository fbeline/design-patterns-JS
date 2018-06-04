const expect = require('chai').expect;

import { Car, CarProxy, Driver }  from '../src/structural/proxy/proxy_es6';

describe('proxy es6 tests', () => {

    it('sanity', () => {
        let driver = new Driver(28);
        let kid = new Driver(10);

        let car = new CarProxy(driver);
        expect(car.drive()).to.equal('driving');

        car = new CarProxy(kid);
        expect(car.drive()).to.equal('too young to drive');
    });

});
