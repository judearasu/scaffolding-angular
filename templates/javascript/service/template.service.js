angular.module('<%= fileName %>')
    .service('<%= className %>', <%= className %>);

<%= className %>.$inject = ['$resource','$http', 'CONFIG'];

function <%= className %>($resource, $http, CONFIG) {


    var service = this;


}
