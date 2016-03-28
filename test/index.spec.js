describe('angularScaffold', function() {
    var angularScaffold = require('../index.js'),
        promptUser = angularScaffold.promptUser,
        appStart = angularScaffold.appStart;

    it('should exist function named promptUser', function() {
        promptUser.should.be.Function();
    });

    it('should exist function named appStart', function() {
        appStart.should.be.Function();
    });

});
