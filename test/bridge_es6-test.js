const expect = require('chai').expect;

const [EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk] = require('../src/structural/bridge/bridge_es6');


describe('bridge es6 tests', () => {

    it('Epson test', () => {
        printer = new EpsonPrinter(new AlcoholInk());
        result = printer.print();
        expect(result).to.equal("Printer: Epson, Ink: alcohol-based");
    });

    it('HP test', () => {
        printer = new HPprinter(new AcrylicInk());
        result = printer.print();
        expect(result).to.equal("Printer: HP, Ink: acrylic-based");
    });
});
