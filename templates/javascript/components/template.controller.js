angular.module('<%= scriptAppName %>')
    .controller('<%= className %>Ctrl', <%= className %>Ctrl);

<%= className %>Ctrl.$inject = [];

function <%= className %>() {
	var ctrl = this;

	ctrl.init = init;

	function init() {
	    return true;
	}
}
