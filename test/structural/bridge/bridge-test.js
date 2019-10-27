const assert = require('assert')

const { EpsonPrinter, HPprinter, acrylicInk, alcoholInk } = require('../../../structural/bridge/bridge')


describe('bridge tests', () => {

  it('Epson test', () => {
    const printer = new EpsonPrinter(alcoholInk)
    const result = printer.print()
    assert.strictEqual(result,'Printer: Epson, Ink: alcohol-based')
  })

  it('HP test', () => {
    const printer = new HPprinter(acrylicInk)
    const result = printer.print()
    assert.strictEqual(result,'Printer: HP, Ink: acrylic-based')
  })
})
