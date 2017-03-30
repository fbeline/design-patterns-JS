function TrafficTower() {
    this.airPlanes = [];
}

TrafficTower.prototype.requestPositions = function() {
    return this.airPlanes.map(function(airPlane) {
        return airPlane.position;
    });
};

function Airplane(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airPlanes.push(this);
}

Airplane.prototype.requestPositions = function() {
    return this.trafficTower.requestPositions();
};

module.exports = [TrafficTower, Airplane];
