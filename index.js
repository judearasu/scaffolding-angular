/**
 * Module Scaffolding Angular
 * MyProDeskUI - Home Depot
 */
//'use strict';
var gulp = require('gulp'),
    inquirer = require('inquirer'),
    fs = require('fs-extra'),
    imaging = require('imaging');

/**
 * Main function to copy template files into the main project
 * @param {object} template
 * @param {object} path
 */

function scaffoldingAngular(template, path) {


	imaging.draw('./images/i.jpg', function(resp, status) {
		console.log(status);
		console.log(resp);
	});

	inquirer.prompt([{
		type: 'input',
		name: 'module_name',
		message: 'Type the name of the module',
		default: 'projectName'
	}, {
		type: 'input',
		name: 'component_name',
		message: 'Type the name of the component you want to create',
		default: 'componentOne'
	}], function(project_answers) {
		userDefaults = {
			project_module_name: project_answers.module_name,
			project_component_name: project_answers.component_name
		};

    var componentName = project_answers.component_name;

	});


}

/**
 * Call main function for testing
 */
scaffoldingAngular();

module.exports = scaffoldingAngular;
