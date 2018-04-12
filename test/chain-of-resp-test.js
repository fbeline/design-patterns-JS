const expect = require('chai').expect;

const [ShoppingCart, Discount] = require('../src/behavioral/chain-of-resp/chain-of-resp');

describe('chain of resp tests', () => {

    it('less then 3 products and total price < $ 500', () => {
        var discount = new Discount();

        var sc = new ShoppingCart();
        sc.addProduct(100);

        var resp = discount.calc(sc.products);

        expect(resp).to.equal(0);
    });



    it('less then 3 products and total price > $ 500', () => {
        var discount = new Discount();

        var sc = new ShoppingCart();
        sc.addProduct(1000);

        var resp = discount.calc(sc.products);

        expect(resp).to.equal(0.1);
    });

    it('more than 3 products and total price < $ 500 ', () => {
        var discount = new Discount();

        var sc = new ShoppingCart();
        sc.addProduct(100);
        sc.addProduct(100);
        sc.addProduct(100);
        sc.addProduct(100);

        var resp = discount.calc(sc.products);

        expect(resp).to.equal(0.05);
    });

    it('more than 3 products and total price > $ 500 ', () => {
        var discount = new Discount();

        var sc = new ShoppingCart();
        sc.addProduct(1000);
        sc.addProduct(100);
        sc.addProduct(100);
        sc.addProduct(100);

        var resp = discount.calc(sc.products);

        expect(resp.toFixed(2)).to.equal('0.15');
    });
});