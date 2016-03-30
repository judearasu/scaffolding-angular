angular.module('customer-service')
    .service('CustomerService', CustomerService);

CustomerService.$inject = ['$resource','$http', 'CONFIG'];

function CustomerService($resource, $http, CONFIG) {


    var service = this;


}
