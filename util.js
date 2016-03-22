(function() {

	/** Not using yargs **/
	/**
	 *
	 * @return {Object} name
	 */

	function getGlobalOptions() {
		return {
			appDir: 'src/app/components',
			base: './',
			testSpecDir: 'src/test/js/specs'
		};
	}

module.exports.getGlobalOptions = getGlobalOptions;
})();
