function getGlobalOptions() {
    return {
        appDir: 'src/app/components',
        base: './',
        testSpecDir: 'src/test/js/specs'
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

appStart();
module.exports = util;
