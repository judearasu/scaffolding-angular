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

    // var command = "imaging ./images/thd_logo.png -l 20 -w 50 -c circle";
    // console.log(command);
    //
    imaging.draw('./images/thd_logo.png', {width: 50}, function (resp, status) {
        console.log(status);
        console.log(resp);
    });


    // inquirer.prompt([{
    //     type: 'input',
    //     name: 'project_name',
    //     message: 'Hola Deepak:',
    //     default: 'Gracias bro!!!!'
    // }, ], function(project_answers) {
    //     try {
    //         fs.copySync('./templates/components/src', './tmp');
    //         console.log("success!");
    //     } catch (err) {
    //         console.error(err);
    //     }
    // });
    return true;
}

/**
* Call main function for testing
*/
scaffoldingAngular();

module.exports = scaffoldingAngular;
