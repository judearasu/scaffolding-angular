(function() {

	/** Not using yargs **/
	/**
	 *
	 * @return {Object} name
	 */

	function getGlobalOptions() {
		return {
			appDir: 'src/app/components',
			base: './'
		};
	};

module.exports.getGlobalOptions = getGlobalOptions;
})();
