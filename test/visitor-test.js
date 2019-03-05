const expect = require('chai').expect;

const [Developer, Manager, bonusVisitor] = require('../src/behavioral/visitor/visitor.js');

describe('visitor tests', () => {
  it('sanity', () => {
    var employees = [];

    var john = new Developer(4000);
    var maria = new Developer(4000);
    var christian = new Manager(10000);

    employees.push(john);
    employees.push(maria);
    employees.push(christian);

    employees.forEach(e => {
      e.accept(bonusVisitor);
    });

    expect(john.bonus).to.equal(4000);
    expect(christian.bonus).to.equal(20000);
  });
});
