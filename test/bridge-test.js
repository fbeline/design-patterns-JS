const expect = require('chai').expect;

const [EpsonPrinter, HPprinter, acrylicInk, alcoholInk] = require('../src/structural/bridge/bridge');


describe('bridge tests', () => {

    it('Epson test', () => {
        const printer = new EpsonPrinter(alcoholInk);
        const result = printer.print();
        expect(result).to.equal("Printer: Epson, Ink: alcohol-based");
    });

    it('HP test', () => {
        const printer = new HPprinter(acrylicInk);
        const result = printer.print();
        expect(result).to.equal("Printer: HP, Ink: acrylic-based");
    });
});
