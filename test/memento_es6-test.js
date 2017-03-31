const expect = require('chai').expect;

const [originator, Caretaker] = require('../src/behavioral/memento/memento_es6');

describe('memento es6 tests', () => {

    it('sanity', () => {
        var careTaker = new Caretaker();
        careTaker.addMemento(originator.store("hello"));
        careTaker.addMemento(originator.store("hello world"));
        careTaker.addMemento(originator.store("hello world !!!"));


        var result = originator.restore(careTaker.getMemento(1));
        expect(result).to.equal("hello world");
    });

});
