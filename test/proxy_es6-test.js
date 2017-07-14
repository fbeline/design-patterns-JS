const expect = require('chai').expect;

const [CarProxy, Driver] = require('../src/structural/proxy/proxy_es6');

describe('proxy_es6 tests', () => {

    it('sanity', () => {
        var driver = new Driver(28);
        var kid = new Driver(10);

        var car = new CarProxy(driver);
        expect(car.drive()).to.equal('driving');

        car = new CarProxy(kid);
        expect(car.drive()).to.equal('too young to drive');
    });

});
