class TrafficTower {
    constructor() {
        this.airplanes = [];
    }

    requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane{
    constructor(position, trafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}


module.exports = [TrafficTower, Airplane];
