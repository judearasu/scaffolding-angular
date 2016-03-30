describe('Javascript based templates', function() {
    var fs = require('fs-extra'),
        path = require("path"),
        pathDir = path.resolve(__dirname + '/../templates/javascript');

    it('Should exists a folder templates for javascript', function(done) {
        var dir = fs.existsSync(pathDir);
        dir.should.equal(true);
        done();
    });

    describe('Should validate folders inside javascript templates', function() {
        it('should exists a folder components', function(done) {
            var dir = fs.existsSync(pathDir + '/components');
            dir.should.equal(true);
            done();
        });
        describe('Should validate files inside the components folder', function() {
            it('should exists on components folder the file template.controller.js', function(done) {
                var dir = fs.existsSync(pathDir + '/components/template.controller.js');
                dir.should.equal(true);
                done();
            });
            it('should exists on components folder the file template.directive.js', function(done) {
                var dir = fs.existsSync(pathDir + '/components/template.directive.js');
                dir.should.equal(true);
                done();
            });
            it('should exists on components folder the file template.html', function(done) {
                var dir = fs.existsSync(pathDir + '/components/template.html');
                dir.should.equal(true);
                done();
            });
            it('should exists on components folder the file template.scss', function(done) {
                var dir = fs.existsSync(pathDir + '/components/template.scss');
                dir.should.equal(true);
                done();
            });

        });
        describe('Should validate files inside the mocks folder', function() {
            it('Should exists a folder mocks', function(done) {
                var dir = fs.existsSync(pathDir + '/mocks');
                dir.should.equal(true);
                done();
            });
            describe('Should validate files inside the mocks folder', function() {
                it('should exists on mocks folder the file template.mocks.js', function(done) {
                    var dir = fs.existsSync(pathDir + '/mocks/template.mocks.js');
                    dir.should.equal(true);
                    done();
                });
            });
        });
        describe('Should validate files inside the spec folder', function() {
            it('Should exists a folder spec', function(done) {
                var dir = fs.existsSync(pathDir + '/spec');
                dir.should.equal(true);
                done();
            });
            describe('Should validate files inside the spec folder', function() {
                it('should exists on spec folder the file controller.js', function(done) {
                    var dir = fs.existsSync(pathDir + '/spec/controller.js');
                    dir.should.equal(true);
                    done();
                });
            });
        });
    });

});
