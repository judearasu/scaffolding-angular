var fs = require('fs-extra'),
    path = require("path");

describe('Components Template Folder', function() {
    var pathDir = path.resolve(__dirname + '/../templates/javascript/components');

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

describe('Template Files components', function() {
    var pathDir = path.resolve(__dirname + '/../templates/javascript/components');

    it('Should exists in Components folder the file template.controller.js', function(done) {
        var dir = fs.existsSync(pathDir + '/template.controller.js');
        dir.should.equal(true);
        done();
    });

    it('Should exists in Components folder the file template.directive.js', function(done) {
        var dir = fs.existsSync(pathDir + '/template.directive.js');
        dir.should.equal(true);
        done();
    });

    it('Should exists in Components folder the file template.html', function(done) {
        var dir = fs.existsSync(pathDir + '/template.html');
        dir.should.equal(true);
        done();
    });

    it('Should exists in Components folder the file template.scss', function(done) {
        var dir = fs.existsSync(pathDir + '/template.scss');
        dir.should.equal(true);
        done();
    });
});
