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

module.exports = function scaffoldingAngular(template, pathScaffolding) {
    console.log(welcomeImg);
    var appDir = path.resolve(__dirname + '../../../');

    inquirer.prompt([{
        type: 'input',
        name: 'componentName',
        message: 'Components Name:',
        default: 'TestComponents'
    }, ], function(project_answers) {
        try {
            fs.copySync(__dirname + pathScaffolding, appDir + '/source/app/components/'+template);
            chalk.green("Success! - Component Created");
        } catch (err) {
            console.log(err);
            chalk.red("Error creating the Component");
        }
    });
};

/**
* Call main function for testing
*/
// scaffoldingAngular('testComponent', '/source/app/components');
