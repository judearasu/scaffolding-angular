describe('TestCtrl', function() {
    var stub,
        controller;

    beforeEach(function() {
        module('test', function($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });

        specHelper.injector(function($controller, $q, $rootScope, TestService) { });

        controller = $controller('TestCtrl');
        $rootScope.$apply();
    });

    it('should be created successfully', function() {
        expect(controller).to.be.defined;
    });

    describe('testNote function', function() {
        it('should exist', function() {
            expect(angular.isFunction(controller.testNote)).to.be.true;
        });
    });

});
