describe('addition', function() {
    it('should add 1+1 correctly', function(done) {
        var onePlusOne = 1 + 1;
        onePlusOne.should.equal(2);
        done();
    });
    it('should add 1+2 correctly', function(done) {
        var onePlusOne = 1 + 2;
        onePlusOne.should.equal(3);
        done();
    });
    it('should add 1+3 correctly', function(done) {
        var onePlusOne = 1 + 3;
        onePlusOne.should.equal(4);
        done();
    });
});
