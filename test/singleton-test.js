const expect = require('chai').expect;
const Person = require('../src/creational/singleton/singleton');

describe('singleton test', () => {
  it('sanity', () => {
    var john = new Person();
    var john2 = new Person();

    expect(john).to.equal(john2);
  });
});
