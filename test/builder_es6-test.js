const expect = require('chai').expect;
const RequestBuilder = require('../src/creational/builder/builder_es6');

describe('builder es6 test', () => {
    it('sanity', () => {
        var requestBuilder = new RequestBuilder();
        var url = 'http://something/users';
        var method = 'GET';
        var request = requestBuilder
            .forUrl(url)
            .useMethod(method)
            .payload(null)
            .build();

        expect(request.method).to.equal(method);
        expect(request.payload).to.be.null;
        expect(request.url).to.equal(url);
    });
});
