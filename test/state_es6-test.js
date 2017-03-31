const expect = require('chai').expect;

const Order = require('../src/behavioral/state/state_es6');

describe('state_es6 tests', () => {

    it('sanity', () => {
        var order = new Order();
        expect(order.state.name).to.equal('waitingForPayment');
        order.nextState();
        expect(order.state.name).to.equal('shipping');
        order.nextState();
        expect(order.state.name).to.equal('delivered');
    });

});
