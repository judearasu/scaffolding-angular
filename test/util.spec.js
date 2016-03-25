describe('util', function() {
  var util = require('../util.js'),
      appStart = util.appStart,
      getGlobalOptions = util.getGlobalOptions;

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

});
