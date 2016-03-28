describe('util', function() {
    var util = require('../util.js'),
        getGlobalOptions = util.getGlobalOptions,
        componentsTerminal = util.componentsTerminal,
        ngServiceTerminal = ngServiceTerminal,
        mockServiceTerminal = mockServiceTerminal,
        appStart = util.appStart;

    it('appstart should be a Function', function(done) {
        appStart.should.be.Function();
        done();
    });

    it('getGlobalOptions should be a Function', function(done) {
        getGlobalOptions.should.be.Function();
        done();
    });

    it('getGlobalOptions should return a object of length 3', function(done) {
        Object.keys(getGlobalOptions()).should.have.length(3);
        done();
    });

    it('componentsTerminal should be an array of length 4', function(done) {
        componentsTerminal().should.be.instanceof(Array).and.have.lengthOf(4);
        done();
    });

});
