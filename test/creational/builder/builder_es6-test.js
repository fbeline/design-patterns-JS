const assert = require('assert')
const RequestBuilder = require('../../../creational/builder/builder_es6')

describe('builder es6 test', () => {
  it('sanity', () => {
    const requestBuilder = new RequestBuilder()
    const url = 'http://something/users'
    const method = 'GET'

    const request = requestBuilder
      .forUrl(url)
      .useMethod(method)
      .payload(null)
      .build()

    assert.strictEqual(request.method, method)
    assert.strictEqual(request.payload, null)
    assert.strictEqual(request.url, url)
  })
})
