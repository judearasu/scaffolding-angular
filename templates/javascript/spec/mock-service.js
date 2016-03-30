describe('Mock Service: <%= className %>', function() {
    var mockService = require('./mock_services/data/<%= fileName %>.js');

    it('should exist Mock Service', function() {
        expect(mockService).to.be.true);
    });
});
