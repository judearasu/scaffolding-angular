function getGlobalOptions(pathTemplates) {
    return {
        appDir: pathTemplates,
        base: './',
        testSpecDir: 'source/test/js/specs'
    };
}

function componentsTerminal() {
    return [{
        type: 'input',
        name: 'module',
        message: 'Type the name of the AngularJs module?',
        default: 'projectName'
    }, {
        type: 'input',
        name: 'fileName',
        message: 'Type the name of your component?',
        default: 'testComponent'
    }, {
        type: 'input',
        name: 'pathTemplates',
        message: 'Type the path for templates?',
        default: 'source/app/components'
    }, {
        type: 'confirm',
        name: 'spec',
        message: 'Do you want to include unit testing?',
        default: true
    }];
}

function appStart(){
	var scaffolding = require('./index.js');
	scaffolding.appStart(__dirname);
}

var util = {
    getGlobalOptions: getGlobalOptions,
    appStart: appStart,
    componentsTerminal: componentsTerminal
};

// Call appStart(); only for testing
appStart();
module.exports = util;
