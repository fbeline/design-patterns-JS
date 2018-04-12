const expect = require('chai').expect;
const RequestBuilder = require('../src/creational/builder/builder');

describe('builder test', () => {
    it('sanity', () => {
        var url = 'http://something/users';
        var requestType = 'GET';
        var requestBuilder = new RequestBuilder();
        var request = requestBuilder
            .forUrl(url)
            .useMethod(requestType)
            .payload(null)
            .build();

        expect(request.method).to.equal(requestType);
        expect(request.url).to.equal(url);
        expect(request.payload).to.equal(null);

    });
});