angular.module('<%= scriptAppName %>')
    .controller('<%= className %>', <%= className %>);

<%= className %>.$inject = [];

function <%= className %>() {
	var ctrl = this;

	ctrl.init = init;

	function init() {
	    return true;
	}
}
