describe.only('angularScaffold', function() {
    //var scaffoldPrompt = require('../index.js').promptsTerminal();
    var angularScaffold = require('../index.js');
    // var appDir = __dirname;
    var promptUser = angularScaffold.promptUser;
    var promptsTerminal = angularScaffold.promptsTerminal();
    var appStart = angularScaffold.appStart;
    it('should exist function named promptUser', function() {
        promptUser.should.be.Function();
    });

    it('should exist function named appStart', function() {
        appStart.should.be.Function();
    });

    it('should be an array of length 3', function(done) {
        promptsTerminal.should.be.instanceof(Array).and.have.lengthOf(3);
        done();
    });
});
