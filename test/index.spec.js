describe('angularScaffold', function() {
    var angularScaffold = require('../index.js'),
        promptUser = angularScaffold.promptUser,
        promptsTerminal = angularScaffold.promptsTerminal(),
        appStart = angularScaffold.appStart;

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
