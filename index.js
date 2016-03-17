/**
 * Module Scaffolding Angular
 * MyProDeskUI - Home Depot
 */
var inquirer = require('inquirer');
var fs = require('fs-extra');
var path = require("path");
var chalk = require('chalk');
var welcomeImg = require('./images/welcomeImg.js');
var Nyancat = require('nyansole');
var clear = require("cli-clear");

/**
 * Main function to copy template files into the main project
 * @param {object} appDir
 */

module.exports = function scaffoldingAngular(appDir) {

    clear();
    appDir = appDir || path.resolve(__dirname + '../../../');
    var nyancat = (new Nyancat()).start();

    setTimeout(function () {
        console.log(welcomeImg);

        inquirer.prompt([{
            type: 'input',
            name: 'componentName',
            message: 'Components Name:',
            default: 'TestComponents'
        }, ], function(project_answers) {
            try {
                fs.copySync(__dirname + '/templates/components', appDir + '/source/app/components/');
                console.log("\n"+chalk.green("Success! - Component Created"));
            } catch (err) {
                console.log("\n"+chalk.red("Error creating the Component"));
            }
        });

        nyancat.end();
    }, 2000);

};
