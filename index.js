/**
 * Module Scaffolding Angular
 * MyProDeskUI - Home Depot
 */
//'use strict';
var gulp = require('gulp'),
	inquirer = require('inquirer'),
	fs = require('fs-extra'),
	_ = require('underscore.string'),
	imaging = require('imaging'),
	template = require('gulp-template'),
	rename = require('gulp-rename'),
	conflict = require("gulp-conflict"),
	util = require('./util');

/**
 * Main function to copy template files into the main project
 * @param {object} template
 * @param {object} path
 */


function scaffoldingAngular(path) {


	imaging.draw('./images/i.jpg', function(resp, status) {
		console.log(status);
		console.log(resp);
	});

	inquirer.prompt([{
		type: 'input',
		name: 'module',
		message: 'Type the name of the AngularJs module?',
		default: 'projectName'
	}, {
		type: 'input',
		name: 'fileName',
		message: 'Type the name of your component?'
	}, {
		type: 'confirm',
		name: 'spec',
		message: 'Do you want to include unit testing?',
		default: true
	}], function(answers) {

		answers = {
			scriptAppName: answers.module,
			className: _.capitalize(_.camelize(answers.fileName)),
			fileName: _.camelize(answers.fileName)
		};

		var options = util.getGlobalOptions();
		console.log(options, answers);
		gulp.src(__dirname + '/templates/javascript/components/*.controller.js')
			.pipe(template(answers))
			.pipe(rename(answers.fileName + '.controller.js'))
			.pipe(conflict(options.base + options.appDir + '/' + answers.scriptAppName))
			.pipe(gulp.dest(options.base + options.appDir + '/' + answers.scriptAppName))
			.on('finish', function() {

			});


	});




}

/**
 * Call main function for testing
 */
scaffoldingAngular();

module.exports = scaffoldingAngular;
