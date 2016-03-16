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
 * @param {object} path
 */

function scaffoldingAngular(template, path) {
    console.log(welcomeImg);

    inquirer.prompt([{
        type: 'input',
        name: 'componentName',
        message: 'Components Name:',
        default: 'TestComponents'
    }, ], function(project_answers) {
        try {
            fs.copySync(__dirname + '/node_modules/scaffolding-angular/templates/components/src', __dirname +'/source/app/components/test');
            chalk.green("Success! - Component Created");
        } catch (err) {
            console.log(err);
            chalk.red("Error creating the Component");
        }
    });
}

/**
* Call main function for testing
*/
// scaffoldingAngular('testComponent', '/source/app/components');
module.exports = scaffoldingAngular;
