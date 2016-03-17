/**
 * Module Scaffolding Angular
 * MyProDeskUI - Home Depot
 */
var inquirer = require('inquirer');
var fs = require('fs-extra');
var path = require("path");
var chalk = require('chalk');
var welcomeImg = require('./images/welcomeImg.js');

/**
 * Main function to copy template files into the main project
 * @param {object} template
 * @param {object} pathScaffolding
 */

module.exports = function scaffoldingAngular(appDir) {
    console.log(welcomeImg);
    appDir = appDir || path.resolve(__dirname + '../../../');

    inquirer.prompt([{
        type: 'input',
        name: 'componentName',
        message: 'Components Name:',
        default: 'TestComponents'
    }, ], function(project_answers) {
        try {
            fs.copySync(__dirname + pathScaffolding, appDir + '/source/app/components/'+template);
            console.log("\n"+chalk.green("Success! - Component Created"));
        } catch (err) {
            console.log(err);
            console.log("\n"+chalk.red("Error creating the Component"));
        }
    });
};
