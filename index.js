/**
 * Module Scaffolding Angular
 * MyProDeskUI - Home Depot
 */
var inquirer = require('inquirer');
var fs = require('fs-extra');
var imaging = require('imaging');

/**
 * Main function to copy template files into the main project
 * @param {object} template
 * @param {object} path
 */

function scaffoldingAngular(template, path) {


    imaging.draw('./images/i.jpg', function (resp, status) {
        /*
          if status == 'success', resp is the image charater string.
          conols.log(resp) to render the image in your terminal
          else if if status == 'fail', resp is the error message
        */
        console.log(status);
        console.log(resp);
    });

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
* Call main function for testing
*/
scaffoldingAngular();

module.exports = scaffoldingAngular;
