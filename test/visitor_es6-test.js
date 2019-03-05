const expect = require('chai').expect;
import {
  Developer,
  Manager,
  bonusVisitor
} from '../src/behavioral/visitor/visitor_es6';

describe('visitor es6 tests', () => {
  it('sanity', () => {
    let employees = [];

    const john = new Developer(4000);
    const maria = new Developer(4000);
    const christian = new Manager(10000);

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
