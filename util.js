function getGlobalOptions() {
    return {
        appDir: 'source/app/components',
        base: './',
        testSpecDir: 'source/test/js/specs'
    };
}

function appStart(){
	var scaffolding = require('./index.js');
	scaffolding.appStart(__dirname);
}

var util = {
    getGlobalOptions: getGlobalOptions,
    appStart: appStart
};

// Use only for testing
// appStart();
module.exports = util;
