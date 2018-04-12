const expect = require('chai').expect;

import Order from '../src/behavioral/state/state_es6';

describe('state_es6 tests', () => {

    it('sanity', () => {
        const order = new Order();
        expect(order.state.name).to.equal('waitingForPayment');
        order.nextState();
        expect(order.state.name).to.equal('shipping');
        order.nextState();
        expect(order.state.name).to.equal('delivered');
    });

    it('edge case after last status return this', () => {
        const order = new Order();
        expect(order.state.name).to.equal('waitingForPayment');
        order.nextState();
        expect(order.state.name).to.equal('shipping');
        order.nextState();
        expect(order.state.name).to.equal('delivered');
        order.nextState();
        expect(order.state.name).to.equal('delivered');
    })

});