const expect = require('chai').expect;

const [EpsonPrinter, HPprinter, acrylicInk, alcoholInk] = require('../src/structural/bridge/bridge');


describe('bridge tests', () => {

    it('Epson test', () => {
        printer = new EpsonPrinter(alcoholInk);
        result = printer.print();
        expect(result).to.equal("Printer: Epson, Ink: alcohol-based");
    });

    it('HP test', () => {
        printer = new HPprinter(acrylicInk);
        result = printer.print();
        expect(result).to.equal("Printer: HP, Ink: acrylic-based");
    });
});
