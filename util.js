var constants = require('./constants');

function getGlobalOptions(pathTemplates) {
    return {
        appDir: pathTemplates,
        base: './',
        testSpecDir: 'source/test/js/specs'
    };
}

function optionListTerminal() {
    return [{
        type: 'list',
        name: constants.optionList.NAME,
        message: constants.optionList.MESSAGE,
        choices: constants.optionList.CHOICES,
        default: constants.optionList.DEFAULT,
    }];
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

function ngServiceTerminal() {
    return [{
        type: 'input',
        name: constants.ngService.FOLDER_NAME,
        message: constants.ngService.FOLDER_MESSAGE,
        default: constants.ngService.FOLDER_DEFAULT
    }];
}

function mockServiceTerminal() {
    return [{
        type: 'input',
        name: constants.mockService.FOLDER_NAME,
        message: constants.mockService.FOLDER_MESSAGE,
        default: constants.mockService.FOLDER_DEFAULT
    }];
}

function appStart(){
	var scaffolding = require('./index.js');
	scaffolding.appStart();
}

var util = {
    getGlobalOptions: getGlobalOptions,
    optionListTerminal: optionListTerminal,
    componentsTerminal: componentsTerminal,
    ngServiceTerminal: ngServiceTerminal,
    mockServiceTerminal: mockServiceTerminal,
    appStart: appStart
};

// Call appStart(); only for testing
// appStart();
module.exports = util;
