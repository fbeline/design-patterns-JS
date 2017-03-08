class Cockipt {
    constructor(command) {
        this.command = command;
    }
    execute() {
        this.command.execute();
    }
}

class Turbine {
    constructor() {
        this.state = false;
    }
    on() {
        this.state = true;
    }
    off() {
        this.state = false;
    }
}

class OnCommand {
    constructor(turbine) {
        this.turbine = turbine;
    }
    execute() {
        this.turbine.on();
    }
}

class OffCommand {
    constructor(turbine) {
        this.turbine = turbine;
    }
    execute() {
        this.turbine.off();
    }
}

module.exports = [Cockipt, Turbine, OnCommand, OffCommand];
