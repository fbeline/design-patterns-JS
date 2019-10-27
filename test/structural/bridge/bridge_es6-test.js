const assert = require('assert')

const { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk } = require('../../../structural/bridge/bridge_es6')


describe('bridge es6 tests', () => {

  it('Epson test', () => {
    const printer = new EpsonPrinter(new AlcoholInk())
    const result = printer.print()
    assert.strictEqual(result, 'Printer: Epson, Ink: alcohol-based')
  })

  it('HP test', () => {
    const printer = new HPprinter(new AcrylicInk())
    const result = printer.print()
    assert.strictEqual(result, 'Printer: HP, Ink: acrylic-based')
  })
})
