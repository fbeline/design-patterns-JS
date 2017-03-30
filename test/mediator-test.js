const expect = require('chai').expect;

const [TrafficTower, Airplane] = require('../src/behavioral/mediator/mediator');

describe('mediator tests', () => {

    it('sanity', () => {
        test(TrafficTower, Airplane);
    });

});

function test(TrafficTower, AirPlane) {
    var trafficTower = new TrafficTower();
    var boeing1 = new Airplane(10, trafficTower);
    var boeing2 = new Airplane(15, trafficTower);
    var boeing3 = new Airplane(55, trafficTower);

    expect(boeing1.requestPositions()).to.deep.equals([10, 15, 55]);
}
