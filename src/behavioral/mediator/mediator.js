function TrafficTower() {
    this.airPlanes = [];
}

TrafficTower.prototype.requestPositions = function() {
    return this.airPlanes.map(function(airPlane) {
       return airPlane.position;
    });
}

function AirPlane(position, trafficTower) {
    this.position = position
    this.trafficTower = trafficTower;
    this.trafficTower.airPlanes.push(this);
}

AirPlane.prototype.requestPositions = function() {
    return this.trafficTower.requestPositions();
}

module.exports = [TrafficTower, AirPlane];
