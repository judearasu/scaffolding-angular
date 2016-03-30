describe('Service : <%= className %>', function() {
    var stub;


    beforeEach(function() {
      // Fill the module name
        module('<moduleName>', function($provide) {
            //$provide.constant('CONFIG', TestConfig);
        });
        specHelper.injector(function($httpBackend, $q, <%= className %>) { });
    });


    it('should be registered', function() {
        expect(<%= className %>).not.to.equal(null);
    });

    describe('<%= className %> function', function() {

        it('should exist', function() {
            expect(<%= className %>.init).not.to.be.null;
        });

    });

});
