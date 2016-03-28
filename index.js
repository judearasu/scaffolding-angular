var gulp = require('gulp'),
    inquirer = require('inquirer'),
    fs = require('fs-extra'),
    _ = require('underscore.string'),
    imaging = require('imaging'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    conflict = require("gulp-conflict"),
    path = require("path"),
    chalk = require('chalk'),
    welcomeImg = require('./images/welcomeImg.js'),
    Nyancat = require('nyansole'),
    clear = require("cli-clear"),
    util = require('./util.js');

function appStart() {
    clear();
    var nyancat = (new Nyancat()).start();

    setTimeout(function() {
        util = require('./util.js');
        console.log(welcomeImg);
        nyancat.end();
        inquirer.prompt(util.optionListTerminal(), function(params) {
            angularScaffold.promptUser(params.options);
        });
    }, 1200);
}

function promptUser(optionList) {
    var optionsPrompt = util.componentsTerminal();

    if(optionList === 'Angular Services'){
        optionsPrompt = util.ngServiceTerminal();
    } else if (optionList === 'Mock Services'){
        optionsPrompt = util.mockServiceTerminal();
    }

    inquirer.prompt(optionsPrompt, function(params) {
        prompt_answers = {
            scriptAppName: params.module,
            className: _.capitalize(_.camelize(params.fileName)),
            fileName: _.slugify(params.fileName),
            testCase: params.spec,
            pathTemplates: params.pathTemplates,
        };

        var options = util.getGlobalOptions(prompt_answers.pathTemplates);

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

var angularScaffold = {
    appStart: appStart,
    promptUser: promptUser
};

module.exports = angularScaffold;
