const expect = require('chai').expect;
import RequestBuilder from '../src/creational/builder/builder_es6';

describe('builder es6 test', () => {
    it('sanity', () => {
        const requestBuilder = new RequestBuilder();
        const url = 'http://something/users';
        const method = 'GET';
        const request = requestBuilder
            .forUrl(url)
            .useMethod(method)
            .payload(null)
            .build();

        expect(request.method).to.equal(method);
        expect(request.payload).to.be.null;
        expect(request.url).to.equal(url);
    });
});