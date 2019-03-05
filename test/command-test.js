const expect = require('chai').expect;

const [Cockpit, Turbine, OnCommand, OffCommand, SpeedUpCommand, SpeedDownCommand] = require('../src/behavioral/command/command.js');

describe('command tests', () => {

  it('turn off/on test', () => {
    var turbine = new Turbine();
    const onCommand = new OnCommand(turbine);
    const cockpit = new Cockpit(onCommand);
    cockpit.execute();
    expect(turbine.state).to.be.true;
  });

  it('speed test', () => {
    var turbine = new Turbine();
    const onCommand = new OnCommand(turbine);
    var cockpit = new Cockpit(onCommand);
    cockpit.execute();

    const speedUp = new SpeedUpCommand(turbine);
    cockpit = new Cockpit(speedUp);
    cockpit.execute();

    expect(turbine.speed).to.equal(200);
  });
});
