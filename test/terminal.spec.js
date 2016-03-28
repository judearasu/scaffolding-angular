describe('Nyansole', function() {
    var Nyancat = require('nyansole');

    it('Should puts a nyancat in the console', function(done) {
        var nyancat = (new Nyancat()).start();
        nyancat.end();
        done();
    });
});

describe('Welcome Image', function() {
    var welcomeImg = require('../images/welcomeImg.js');

    it('should print welcome image in the console', function(done) {
        console.log(welcomeImg);
        done();
    });

    it('should welcome image be of length 10', function(done) {
        welcomeImg.should.have.length(379);
        done();
    });
});

describe('Components Terminal Prompt', function() {
    var scaffoldPrompt = require('../util.js').componentsTerminal();

    it('should Component input needs to have this properties', function(done) {
        var modulePrompt = scaffoldPrompt[0];
        modulePrompt.type.should.equal('input');
        modulePrompt.name.should.equal('fileName');
        modulePrompt.message.should.equal('Type the name of your component?');
        done();
    });

    it('should Module input needs to have this properties', function(done) {
        var modulePrompt = scaffoldPrompt[1];
        modulePrompt.type.should.equal('input');
        modulePrompt.name.should.equal('module');
        modulePrompt.message.should.equal('Type the name of the AngularJs module?');
        done();
    });

    it('should TDD input needs to have this properties', function(done) {
        var modulePrompt = scaffoldPrompt[2];
        modulePrompt.type.should.equal('input');
        modulePrompt.name.should.equal('pathTemplates');
        modulePrompt.message.should.equal('Type the path for templates?');
        done();
    });

    it('should TDD input needs to have this properties', function(done) {
        var modulePrompt = scaffoldPrompt[3];
        modulePrompt.type.should.equal('confirm');
        modulePrompt.name.should.equal('spec');
        modulePrompt.message.should.equal('Do you want to include unit testing?');
        done();
    });
});
