const expect = require('chai').expect;

const [Car, CarProxy, Driver] = require('../src/structural/proxy/proxy');

describe('proxy tests', () => {

  it('sanity', () => {
    var driver = new Driver(28);
    var kid = new Driver(10);

    var car = new CarProxy(driver);
    expect(car.drive()).to.equal('driving');

    car = new CarProxy(kid);
    expect(car.drive()).to.equal('too young to drive');
  });

});
