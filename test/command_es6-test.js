const expect = require('chai').expect;

const [Cockpit, Turbine, OnCommand, OffCommand] = require('../src/behavioral/command/command_es6.js');

describe('command es6 tests', () => {

    it('turn off/on test', () => {
        var turbine = new Turbine();
        const onCommand = new OnCommand(turbine);
        const cockpit = new Cockpit(onCommand);
        cockpit.execute();
        expect(turbine.state).to.be.true;
    });
});
