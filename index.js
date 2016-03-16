/**
 * Module Scaffolding Angular
 * MyProDeskUI - Home Depot
 */
var inquirer = require('inquirer');
var fs = require('fs-extra');
var path = require("path");
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
            fs.copySync('./templates/components/src', __dirname +'/source/app/components/test');
            console.log("success!");
        } catch (err) {
            console.error(err);
        }
    });
}

/**
* Call main function for testing
*/
// scaffoldingAngular('testComponent', '/source/app/components');
module.exports = scaffoldingAngular;
