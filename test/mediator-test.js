const expect = require('chai').expect;

const [TrafficTower, AirPlane] = require('../src/behavioral/mediator/mediator');

describe('mediator tests', () => {

    it('sanity', () => {
        test(TrafficTower, AirPlane);
    });

});

function test(TrafficTower, AirPlane) {
    var trafficTower = new TrafficTower();
    var boeing1 = new AirPlane(10, trafficTower);
    var boeing2 = new AirPlane(15, trafficTower);
    var boeing3 = new AirPlane(55, trafficTower);

    expect(boeing1.requestPositions()).to.deep.equals([10, 15, 55]);
}
