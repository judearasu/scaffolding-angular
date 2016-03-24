describe.only('util', function() {
  var util = require('../util.js');

  var appStart = util.appStart;
  var getGlobalOptions = util.getGlobalOptions;

  it('appstart should be a Function', function(done) {
    appStart.should.be.Function();
    done();
  });

  it('getGlobalOptions should be a Function', function(done) {
    getGlobalOptions.should.be.Function();
    done();
  });

  it('getGlobalOptions should return a object', function(done) {
    // getGlobalOptions.should.have.length(3);
    //getGlobalOptions().should.be.instanceOf(Object);
    getGlobalOptions.should.have.property('name','getGlobalOptions').and.have.lengthOf();
    //getGlobalOptions.should.have.keys(['appDir', 'base','testSpecDir']);
    // getGlobalOptions.should.not.be.Infinity();
    // getGlobalOptions.should.return.an.Object().and.not.empty();
    // getGlobalOptions.should.return.an.instanceOf(object);
    // getGlobalOptions.should.be.an.Object().and.not.empty().and.match(/abc/);//
    done();
  });

});
