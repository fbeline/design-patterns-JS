const assert = require('assert')

const { Cabbinet, FloppyDisk, HardDrive, Memory } = require('../../../structural/composite/composite_es6')


describe('composity tests', () => {

  it('sanity test', () => {
    const cabbinet = new Cabbinet()
    cabbinet.add(new FloppyDisk())
    cabbinet.add(new HardDrive())
    cabbinet.add(new Memory())

    assert.strictEqual(cabbinet.getPrice(),600)
  })
})
