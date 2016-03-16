/**
 * Module Scaffolding Angular
 * MyProDeskUI - Home Depot
 */
var inquirer = require('inquirer');
var fs = require('fs-extra');
var imaging = require('imaging');
var pictureTube = require('picture-tube');

/**
 * Main function to copy template files into the main project
 * @param {object} template
 * @param {object} path
 */

function scaffoldingAngular(template, path) {

    // imaging.draw('./images/thd_logo.png', {width: 50}, function (resp, status) {
    //     console.log(status);
    //     console.log(resp);
    // });

    var tube = pictureTube();
    pictureTube().pipe(process.stdout);
    fs.createReadStream(__dirname + '/images/thdpro-xtra.png').pipe(tube);

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
