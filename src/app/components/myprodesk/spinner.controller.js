angular.module('myprodesk')
    .controller('Spinner', Spinner);

Spinner.$inject = [];

function Spinner() {
	var ctrl = this;

	ctrl.init = init;

	function init() {
	    return true;
	}
}
