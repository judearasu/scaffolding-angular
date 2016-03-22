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

var angularScaffold = {
    appStart: appStart,
    promptsTerminal: promptsTerminal,
    promptUser: promptUser
};

function appStart(appDir) {
    clear();
    appDir = appDir || path.resolve(__dirname + '../../../');

    var nyancat = (new Nyancat()).start();

    setTimeout(function() {
        console.log(welcomeImg);
        nyancat.end();
        angularScaffold.promptUser();
    }, 1400);
}

function promptsTerminal() {
    var prompts = [{
        type: 'input',
        name: 'module',
        message: 'Type the name of the AngularJs module?',
        default: 'projectName'
    }, {
        type: 'input',
        name: 'fileName',
        message: 'Type the name of your component?',
        default: 'testComponent'
    }, {
        type: 'confirm',
        name: 'spec',
        message: 'Do you want to include unit testing?',
        default: true
    }];
    return prompts;
}

function promptUser() {
    inquirer.prompt(promptsTerminal(), function(params) {

        prompt_answers = {
            scriptAppName: params.module,
            className: _.capitalize(_.camelize(params.fileName)),
            fileName: _.slugify(params.fileName),
            testCase: params.spec
        };

        var options = util.getGlobalOptions();
        console.log(prompt_answers);

        if (prompt_answers.testCase) {
            gulp.src(__dirname + '/templates/javascript/spec/controller.js')
                .pipe(template(prompt_answers))
                .pipe(rename(prompt_answers.fileName + '.spec.js'))
                .pipe(conflict(options.base + options.testSpecDir + '/'))
                .pipe(gulp.dest(options.base + options.testSpecDir + '/'));
        }

        gulp.src(__dirname + '/templates/javascript/components/*.controller.js')
            .pipe(template(prompt_answers))
            .pipe(rename(prompt_answers.fileName + '.controller.js'))
            .pipe(conflict(options.base + options.appDir + '/' + prompt_answers.scriptAppName))
            .pipe(gulp.dest(options.base + options.appDir + '/' + prompt_answers.fileName));

        gulp.src(__dirname + '/templates/javascript/components/*.directive.js')
            .pipe(template(prompt_answers))
            .pipe(rename(prompt_answers.fileName + '.directive.js'))
            .pipe(conflict(options.base + options.appDir + '/' + prompt_answers.scriptAppName))
            .pipe(gulp.dest(options.base + options.appDir + '/' + prompt_answers.fileName));

        gulp.src(__dirname + '/templates/javascript/components/*.html')
            .pipe(template(prompt_answers))
            .pipe(rename(prompt_answers.fileName + '.html'))
            .pipe(conflict(options.base + options.appDir + '/' + prompt_answers.scriptAppName))
            .pipe(gulp.dest(options.base + options.appDir + '/' + prompt_answers.fileName));

        gulp.src(__dirname + '/templates/javascript/components/*.scss')
            .pipe(template(prompt_answers))
            .pipe(rename(prompt_answers.fileName + '.scss'))
            .pipe(conflict(options.base + options.appDir + '/' + prompt_answers.scriptAppName))
            .pipe(gulp.dest(options.base + options.appDir + '/' + prompt_answers.fileName))
            .on('finish', function() {
                console.log("\n" + chalk.green("Success! - Component Created"));
                process.exit(1);
            });
    });
}

angularScaffold.appStart(__dirname);
module.exports = angularScaffold;
