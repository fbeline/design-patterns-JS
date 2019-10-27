const assert = require('assert')

const RequestBuilder = require('../../../creational/builder/builder')

describe('builder test', () => {
  it('sanity', () => {
    const requestBuilder = new RequestBuilder()
    const request = requestBuilder
      .forUrl('http://something/users')
      .useMethod('GET')
      .payload(null)
      .build()

    assert.strictEqual(request.method, 'GET')
  })
})
