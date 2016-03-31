var util = require('../util.js'),
    getGlobalOptions = util.getGlobalOptions,
    componentsTerminal = util.componentsTerminal,
    optionListTerminal = util.optionListTerminal,
    ngServiceTerminal = util.ngServiceTerminal,
    mockServiceTerminal = util.mockServiceTerminal,
    appStart = util.appStart;

describe('getGlobalOptions function in util.js', function() {
    it('getGlobalOptions should be a Function', function(done) {
        getGlobalOptions.should.be.Function();
        done();
    });

    it('getGlobalOptions should return a object of length 4', function(done) {
        Object.keys(getGlobalOptions()).should.have.length(4);
        done();
    });
});

describe('optionListTerminal function in util.js', function() {
    it('optionListTerminal should be a Function', function(done) {
        optionListTerminal.should.be.Function();
        done();
    });

    it('optionListTerminal should be an array of length 1', function(done) {
        optionListTerminal().should.be.instanceof(Array).and.have.lengthOf(1);
        done();
    });
});

describe('componentsTerminal function in util.js', function() {
    it('componentsTerminal should be a Function', function(done) {
        componentsTerminal.should.be.Function();
        done();
    });

    it('componentsTerminal should be an array of length 4', function(done) {
        componentsTerminal().should.be.instanceof(Array).and.have.lengthOf(4);
        done();
    });
});

describe('ngServiceTerminal function in util.js', function() {
    it('ngServiceTerminal should be a Function', function(done) {
        ngServiceTerminal.should.be.Function();
        done();
    });

    it('ngServiceTerminal should be an array of length 3', function(done) {
        ngServiceTerminal().should.be.instanceof(Array).and.have.lengthOf(3);
        done();
    });
});

describe('mockServiceTerminal function in util.js', function() {
    it('mockServiceTerminal should be a Function', function(done) {
        mockServiceTerminal.should.be.Function();
        done();
    });

    it('mockServiceTerminal should be an array of length 3', function(done) {
        mockServiceTerminal().should.be.instanceof(Array).and.have.lengthOf(3);
        done();
    });
});

describe('appStart function in util.js', function() {
    it('appstart should be a Function', function(done) {
        appStart.should.be.Function();
        done();
    });
});
