var osLocale = require('os-locale');
var constants = osLocale(function(err, locale) {
    constants = require('./locales/en.json');
    if (locale === 'es_ES') {
        constants = require('./locales/es.json');
    }
    if (locale === 'pt_PT') {
        constants = require('./locales/pt.json');
    }
});

function getGlobalOptions(pathTemplates, pathTDD) {
    return {
        appDir: pathTemplates,
        base: './',
        testSpecDir: 'source/test/js/specs',
        serviceDir: pathTemplates
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
    }, {
        type: 'confirm',
        name: constants.ngService.TDD_NAME,
        message: constants.ngService.TDD_MESSAGE,
        default: constants.ngService.TDD_DEFAULT
    }, {
        type: 'input',
        name: constants.ngService.PATH_NAME,
        message: constants.ngService.PATH_MESSAGE,
        default: constants.ngService.PATH_DEFAULT
    }
  ];
}

function mockServiceTerminal() {
    return [{
        type: 'input',
        name: constants.mockService.FOLDER_NAME,
        message: constants.mockService.FOLDER_MESSAGE,
        default: constants.mockService.FOLDER_DEFAULT
    }, {
        type: 'input',
        name: constants.mockService.PATH_NAME,
        message: constants.mockService.PATH_MESSAGE,
        default: constants.mockService.PATH_DEFAULT
    }, {
        type: 'confirm',
        name: constants.mockService.TDD_NAME,
        message: constants.mockService.TDD_MESSAGE,
        default: constants.mockService.TDD_DEFAULT
    }];
}

function appStart() {
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

// Function only for testing
if(process.mainModule.filename.indexOf("node_modules") === -1){
    appStart();
}
module.exports = util;
