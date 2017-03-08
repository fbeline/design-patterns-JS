function Cockpit(command) {
    this.command = command;
}
Cockpit.prototype.execute = function() {
    this.command.execute();
}

function Turbine() {
  this.speed = 0;
  this.state = false;
}

Turbine.prototype.on = function() {
    this.state = true;
    this.speed = 100;
}

Turbine.prototype.off = function() {
    this.speed = 0;
    this.state = false;
}

Turbine.prototype.speedDown = function() {
    if (!this.state) return;

    this.speed -= 100;
}

Turbine.prototype.speedUp = function() {
    if (!this.state) return;

    this.speed += 100;
}


function OnCommand(turbine) {
    this.turbine = turbine;
}
OnCommand.prototype.execute = function() {
    this.turbine.on();
}

function OffCommand(turbine) {
    this.turbine = turbine;
}
OffCommand.prototype.execute = function() {
    this.turbine.off();
}

function SpeedUpCommand(turbine) {
    this.turbine = turbine;
}
SpeedUpCommand.prototype.execute = function() {
    this.turbine.speedUp();
}

function SpeedDownCommand(turbine) {
    this.turbine = turbine;
}
SpeedDownCommand.prototype.execute = function() {
    this.turbine.speedDown();
}


module.exports = [Cockpit, Turbine, OnCommand, OffCommand, SpeedUpCommand, SpeedDownCommand];
