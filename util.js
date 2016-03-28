var constants = require('./constants');

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
        name: constants.component.FOLDER_NAME,
        message: constants.component.FOLDER_MESSAGE,
        default: constants.component.FOLDER_DEFAULT
    }, {
        type: 'input',
        name: constants.component.NGMODULE_NAME,
        message: constants.component.NGMODULE_MESSAGE,
        default: constants.component.NGMODULE_DEFAULT
    }, {
        type: 'input',
        name: constants.component.PATH_NAME,
        message: constants.component.PATH_MESSAGE,
        default: constants.component.PATH_DEFAULT
    }, {
        type: 'confirm',
        name: constants.component.TDD_NAME,
        message: constants.component.TDD_MESSAGE,
        default: constants.component.TDD_DEFAULT
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
