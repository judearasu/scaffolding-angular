(function() {
    'use strict';
    describe('Controller: <%= className %>Ctrl', function() {

        var ctrl, $scope;

        beforeEach(function() {
            module('<%= scriptAppName %>');
            module(function($provide) {
                //$provide.value('service', serviceMock);
            });

            // serviceMock = {
            //     getSomeValue: function() {
            //         return 'foobar';
            //     }
            // }

            inject(function($rootScope, $controller) {
                $scope = $rootScope.$new();

                ctrl = $controller('<%= className %>Ctrl', {
                    $scope: $scope
                });
            });

            it('should be created successfully', function() {
              expect(ctrl).to.be.defined;
            });

        });

        describe('Internal Functions and Methods', function(){
            it('should exist', function(){
              expect(angular.isFunction(controller.init)).to.be.true);
            });
        });
    });

})();
