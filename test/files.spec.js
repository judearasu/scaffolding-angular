var fs = require('fs-extra'),
    path = require("path");

describe('Template Folder', function() {
    var pathDir = path.resolve(__dirname + '/../templates');

    it('Should exists a folder templates', function(done) {
        var dir = fs.existsSync(pathDir);
        dir.should.equal(true);
        done();
    });

    it('Should exists a folder templates/components', function(done) {
        var dir = fs.existsSync(pathDir + '/components');
        dir.should.equal(true);
        done();
    });

    it('Should exists a folder templates/javascript', function(done) {
        var dir = fs.existsSync(pathDir + '/javascript');
        dir.should.equal(true);
        done();
    });

    it('Should exists a folder templates/mock_service', function(done) {
        var dir = fs.existsSync(pathDir + '/mock_service');
        dir.should.equal(true);
        done();
    });

    it('Should exists a folder templates/service', function(done) {
        var dir = fs.existsSync(pathDir + '/service');
        dir.should.equal(true);
        done();
    });
});
