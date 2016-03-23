var angularScaffold = require('../index.js');

describe.only('index', function() {
  // console.log(angularScaffold);

  var promptsTerminal = angularScaffold.promptsTerminal();
  console.log(promptsTerminal);

  // var angularScaffold = {
  //     promptsTerminal: promptsTerminal,
  //     promptsTerminal: promptsTerminal,
  //     promptUser: promptUser
  // };

  it('should have a valid function with name promptsTerminal', function(done) {
    console.log(promptsTerminal);
    promptsTerminal.should.exist();
    done();
  });

  it('should accept a single parameter ', function(done) {
    promptsTerminal.should.have.length(1);
    done();
    // body...
  });
});
