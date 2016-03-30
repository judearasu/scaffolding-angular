describe('Controller: <%= className %>Ctrl', function() {
    var controller,
        $scope,
        stubGetVar,
        params;

    beforeEach(function() {
        module('<%= scriptAppName %>', function($provide) {
            // specHelper.fakeRouteProvider($provide);
            // specHelper.fakeLogger($provide);
            $provide.constant('CONFIG', TestConfig);
        });
        // specHelper.injector(function($controller, $q, $rootScope, $httpBackend, CONFIG) { });
    });

    beforeEach(function() {
      stubGetVar = sinon.stub(<%= scriptAppName %>Service, 'get<%= scriptAppName %>', function() {
          var deferred = $q.defer();
          deferred.resolve(Mock<%= scriptAppName %>Service.getMock<%= scriptAppName %>());
          return deferred.promise;
      });
      controller = $controller('<%= scriptAppName %>Ctrl');
      $rootScope.$apply();
  });

    describe('Internal Functions and Methods', function() {
        beforeEach(function() {
            controller.init();
        });
        it('should exist', function() {
            expect(angular.isFunction(controller.init)).to.be.true);
        });
    });
});
