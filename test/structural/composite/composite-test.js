const assert = require('assert')

const { EquipmentComposition, FloppyDisk, HardDrive, Memory } = require('../../../structural/composite/composite.js')


describe('composity tests', () => {

  it('sanity test', () => {
    const cabbinet = new EquipmentComposition('cabbinet')
    cabbinet.add(new FloppyDisk())
    cabbinet.add(new HardDrive())
    cabbinet.add(new Memory())

    assert.strictEqual(cabbinet.getPrice(),600)
  })
})
