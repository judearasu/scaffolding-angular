angular.module('%templateModule%')
	.directive('%templateDirective%', %templateDirective%);

function %templateDirective%() {

	var directive = {
		link: link,
	    restrict: 'EA',
	    controller: '%templateCtrl%',
	    controllerAs: '%templateCtrl%',
	    bindToController: true,
    	templateUrl: 'components/%templateCtrl%/%templateCtrl%.html',
        scope:{}
    };

	    return directive;

	    function link(scope, elem, attrs, %templateCtrl%) {
	        %templateCtrl%.init();
	    }
	}
