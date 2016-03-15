/**
 * Module Scaffolding Angular
 * MyProDeskUI - Home Depot
 */
var inquirer = require('inquirer');
var fs = require('fs-extra');

module.exports = scaffoldingAngular;

/**
 * Main function to copy template files into the main project
 * @param {object} template
 * @param {object} path
 */

function scaffoldingAngular(template, path) {

    inquirer.prompt([{
        type: 'input',
        name: 'project_name',
        message: 'Hola Deepak:',
        default: 'Gracias bro!!!!'
    }, ], function(project_answers) {
        try {
            fs.copySync('./templates/components/src', './tmp');
            console.log("success!");
        } catch (err) {
            console.error(err);
        }
    });

    return true;
}

/**
* Call main function
*/
scaffoldingAngular();
