var gulp = require('gulp'),
    inquirer = require('inquirer'),
    fs = require('fs-extra'),
    _ = require('underscore.string'),
    imaging = require('imaging'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    conflict = require("gulp-conflict"),
    util = require('./util'),
    path = require("path"),
    chalk = require('chalk'),
    welcomeImg = require('./images/welcomeImg.js'),
    Nyancat = require('nyansole'),
    clear = require("cli-clear");

var scaffolding = {
    angular: function(appDir) {
        clear();
        appDir = appDir || path.resolve(__dirname + '../../../');
        var nyancat = (new Nyancat()).start();

        setTimeout(function() {
            console.log(welcomeImg);
            nyancat.end();
            scaffolding.promptUser();
        }, 1400);
    },

    promptsTerminal: function() {
        var promptsTerminal = [{
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
        }];
        return promptsTerminal;
    },

    promptUser: function() {
        inquirer.prompt(scaffolding.promptsTerminal(), function(params) {

            answers = {
                scriptAppName: params.module,
                className: _.capitalize(_.camelize(params.fileName)),
                fileName: _.slugify(params.fileName),
                fileName1: _.camelize(params.fileName)
            };


            var options = util.getGlobalOptions();
            // create controller
            // create  filter
            // create directive
            // create html

            console.log(options, answers);
            gulp.src(__dirname + '/templates/javascript/components/*.controller.js')
                .pipe(template(answers))
                .pipe(rename(answers.fileName + '.controller.js'))
                .pipe(conflict(options.base + options.appDir + '/' + answers.scriptAppName))
                .pipe(gulp.dest(options.base + options.appDir + '/' + answers.fileName))
                .on('finish', function() {
                    console.log("\n" + chalk.green("Success! - Component Created"));
                    process.exit(1);
                });
        });
    }
};

/**
 * Call main function angular()
 */
// scaffolding.angular(__dirname);

/**
 * Node.js export modules
 */
module.exports = scaffolding;
