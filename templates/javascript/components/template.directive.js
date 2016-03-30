(function() {
	'use strict';
angular.module('<%= scriptAppName %>')
	.directive('<%= className %>', <%= className %>);

function <%= className %>() {

	var directive = {
		link: link,
	    restrict: 'EA',
	    controller: '<%= className %>Ctrl',
	    controllerAs: '<%= className.toLowerCase() %>',
	    bindToController: true,
    	templateUrl: 'components/<%= fileName %>/<%= fileName %>.html',
        scope:{}
    };

	    return directive;

	    function link(scope, elem, attrs, <%= className %>) {
	        <%= className %>.init();
	    }
	}
})();
