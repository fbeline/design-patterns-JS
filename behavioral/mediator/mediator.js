function TrafficTower() {
  this.airplanes = []
}

TrafficTower.prototype.requestPositions = function() {
  return this.airplanes.map(function(airplane) {
    return airplane.position
  })
}

function Airplane(position, trafficTower) {
  this.position = position
  this.trafficTower = trafficTower
  this.trafficTower.airplanes.push(this)
}

Airplane.prototype.requestPositions = function() {
  return this.trafficTower.requestPositions()
}

module.exports = { TrafficTower, Airplane }
