angular.module('Slush')
    .controller('Material', Material);

Material.$inject = [];

function Material() {
	var ctrl = this;

	ctrl.init = init;

	function init() {
	    return true;
	}
}
