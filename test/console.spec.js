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
