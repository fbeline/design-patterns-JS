const expect = require('chai').expect;

const [ShoppingCart, guestStrategy, regularStrategy, premiumStrategy] = require('../src/behavioral/strategy/strategy.js');


describe('strategy tests', () => {

    it('guest test', () => {
        console.log(ShoppingCart);
        var guestCart = new ShoppingCart(guestStrategy);
        guestCart.setAmount(100);
        expect(guestCart.checkout()).to.equal(100);
    });

    it('regular test', () => {
        var regularCart = new ShoppingCart(regularStrategy);
        regularCart.setAmount(100);
        expect(regularCart.checkout()).to.equal(90);
    });

    it('premium test', () => {
        var premiumCart = new ShoppingCart(premiumStrategy);
        premiumCart.setAmount(100);
        expect(premiumCart.checkout()).to.equal(80);
    });
});
