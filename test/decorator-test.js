const expect = require('chai').expect;
const [Penne, SauceDecorator, CheeseDecorator] = require('../src/structural/decorator/decorator');

describe('decorator tests', () => {

  it('sanity test', () => {
    var penne = new Penne();
    var penneWithSauce = new SauceDecorator(penne);
    var penneWithSauceAndCheese = new CheeseDecorator(penneWithSauce);

    expect(penne.getPrice()).to.equal(8);
    expect(penneWithSauce.getPrice()).to.equal(13);
    expect(penneWithSauceAndCheese.getPrice()).to.equal(16);
  });

});
