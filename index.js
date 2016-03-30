var inquirer = require('inquirer'),
    _ = require('underscore.string'),
    Nyancat = require('nyansole'),
    clear = require("cli-clear"),
    welcomeImg = require('./images/welcomeImg.js'),
    util = require('./util.js'),
    generators = require('./generators.js'),
    nyancat = (new Nyancat()).start();
    clear();

function appStart() {
    setTimeout(function() {
        util = require('./util.js');
        console.log(welcomeImg);
        nyancat.end();
        inquirer.prompt(util.optionListTerminal(), function(params) {
            angularScaffold.promptUser(params.options);
        });
    }, 1200);
}

function promptUser(optionList) {
    if (optionList === 'Component') {
        inquirer.prompt(util.componentsTerminal(), function(params) {
            promptAnswers = {
                scriptAppName: params.module,
                className: _.capitalize(_.camelize(params.fileName)),
                fileName: _.slugify(params.fileName),
                testCase: params.spec,
                pathTemplates: params.pathTemplates,
            };
            var options = util.getGlobalOptions(promptAnswers.pathTemplates);
            // Create scaffolding files for Component
            generators.componentsGenerator(promptAnswers, options);
        });
    }

    if (optionList === 'Angular Services') {
        // Create scaffolding files for Component
        generators.ngServiceGenerator();
    }

    if (optionList === 'Mock Services') {
        // Create scaffolding files for Component
        generators.mockServiceGenerator();
    }
}

var angularScaffold = {
    appStart: appStart,
    promptUser: promptUser
};

module.exports = angularScaffold;
