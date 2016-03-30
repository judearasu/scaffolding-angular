describe('generator', function() {
    var generator = require('../generators.js'),
        componentsGenerator = generator.componentsGenerator,
        ngServiceGenerator = generator.ngServiceGenerator,
        mockServiceGenerator = generator.mockServiceGenerator;

    it('should exist function named componentsGenerator', function() {
        componentsGenerator.should.be.Function();
    });

    it('should exist function named ngServiceGenerator', function() {
        ngServiceGenerator.should.be.Function();
    });

    it('should exist function named mockServiceGenerator', function() {
        mockServiceGenerator.should.be.Function();
    });

});
