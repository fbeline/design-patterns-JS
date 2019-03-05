const expect = require('chai').expect;

const Iterator = require('../src/behavioral/iterator/iterator');

import Iterator6 from '../src/behavioral/iterator/iterator_es6';

describe('iterator tests', () => {

  it('sanity', () => {
    test(Iterator);
  });

});

describe('iterator es6 tests', () => {

  it('sanity', () => {
    test(Iterator6);
  });

});

function test(Iterator) {
  var numbers = new Iterator([1, 2, 3]);

  expect(numbers.next()).to.equal(1);
  expect(numbers.next()).to.equal(2);
  expect(numbers.next()).to.equal(3);
  expect(numbers.hasNext()).to.false;
}
