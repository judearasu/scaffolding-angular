describe('nyansole', function() {
    var Nyancat = require('nyansole'),
        clear = require("cli-clear");

    it('Should puts a nyancat in the console', function(done) {
        var nyancat = (new Nyancat()).start();
        setTimeout(function() {
            nyancat.end();
            clear();
            done();
        }, 50);
    });
});
describe('welcomeImg', function() {
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

describe('terminalPrompt', function() {
    var scaffoldPrompt = require('../index.js').promptsTerminal();

    it('should first input needs to have this properties', function(done) {
        var modulePrompt = scaffoldPrompt[0];
        modulePrompt.type.should.equal('input');
        modulePrompt.name.should.equal('module');
        modulePrompt.message.should.equal('Type the name of the AngularJs module?');
        done();
    });
});
