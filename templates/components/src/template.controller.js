angular.module('%templateModule%')
    .controller('%templateCtrl%', %templateCtrl%);

%templateCtrl%.$inject = [];

function %templateCtrl%() {
	var ctrl = this;

	ctrl.init = init;

	function init() {
	    return true;
	}
}
