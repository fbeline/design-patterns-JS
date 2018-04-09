const expect = require('chai').expect;

const [ShoppingCart, Discount]  = require('../src/behavioral/chain-of-resp/chain-of-resp-es6');

describe('chain of resp es6 tests', () => {

    it(' > $ 500', () => {
        const discount = new Discount();

        const sc = new ShoppingCart();
        sc.addProduct(1000);

        let resp = discount.calc(sc.products);

        expect(resp).to.equal(0.1);
    });

    it('mote than 3 products', () => {
        const discount = new Discount();

        const sc = new ShoppingCart();
        sc.addProduct(100);
        sc.addProduct(100);
        sc.addProduct(100);
        sc.addProduct(100);

        let resp = discount.calc(sc.products);

        expect(resp).to.equal(0.05);
    });

    it('mote than 3 products and > $ 500 ', () => {
        let discount = new Discount();

        let sc = new ShoppingCart();
        sc.addProduct(1000);
        sc.addProduct(100);
        sc.addProduct(100);
        sc.addProduct(100);

        let resp = discount.calc(sc.products);

        expect(resp.toFixed(2)).to.equal('0.15');
    });
});
