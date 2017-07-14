const expect = require('chai').expect;

import { ShoppingCart, guestStrategy, regularStrategy, premiumStrategy } from '../src/behavioral/strategy/strategy_es6.js';


describe('strategy es6 tests', () => {

    it('guest test', () => {
        const guestCart = new ShoppingCart(guestStrategy);
        guestCart.setAmount(100);
        expect(guestCart.checkout()).to.equal(100);
    });

    it('regular test', () => {
        const regularCart = new ShoppingCart(regularStrategy);
        regularCart.setAmount(100);
        expect(regularCart.checkout()).to.equal(90);
    });

    it('premium test', () => {
        const premiumCart = new ShoppingCart(premiumStrategy);
        premiumCart.setAmount(100);
        expect(premiumCart.checkout()).to.equal(80);
    });
});
