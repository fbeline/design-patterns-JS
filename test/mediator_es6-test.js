const expect = require('chai').expect;

import {
  TrafficTower,
  Airplane
} from '../src/behavioral/mediator/mediator_es6';

describe('mediator es6 tests', () => {

  it('sanity', () => {
    const trafficTower = new TrafficTower();
    const boeing1 = new Airplane(10, trafficTower);
    const boeing2 = new Airplane(15, trafficTower);
    const boeing3 = new Airplane(55, trafficTower);

    expect(boeing1.requestPositions()).to.deep.equals([10, 15, 55]);
  });
});
