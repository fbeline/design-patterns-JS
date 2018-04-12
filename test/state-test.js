const expect = require('chai').expect;

const Order = require('../src/behavioral/state/state');

describe('state tests', () => {

    it('sanity', () => {
        var order = new Order();
        expect(order.state.name).to.equal('waitingForPayment');
        order.nextState();
        expect(order.state.name).to.equal('shipping');
        order.nextState();
        expect(order.state.name).to.equal('delivered');
    });


    it('edge case after last status return this', () => {
        var order = new Order();
        expect(order.state.name).to.equal('waitingForPayment');
        order.nextState();
        expect(order.state.name).to.equal('shipping');
        order.nextState();
        expect(order.state.name).to.equal('delivered');
        order.nextState();
        expect(order.state.name).to.equal('delivered');
    })

});