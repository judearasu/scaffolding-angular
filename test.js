<<<<<<< HEAD
var path = require('path');
var assert = require('assert');
var gutil = require('gulp-util');
var filter = require('./');

describe('Scaffold Angular', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
=======
var scaffoldingAngular = require('./index.js');

/**
* Call main function for testing
*/
scaffoldingAngular(__dirname);
>>>>>>> master
