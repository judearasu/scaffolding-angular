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
    constants = require('./constants');

function appStart(appDir) {
    clear();
    appDir = appDir || path.resolve(__dirname + '../../../');
    // var nyancat = (new Nyancat()).start();
    // promptsTerminal();
    console.log('Hello');
    console.log(util);

    // angularScaffold.promptUser();

    // setTimeout(function() {
        // console.log(welcomeImg);
        // nyancat.end();
    // }, 1200);
}



function promptssTerminal() {
  return [{
    type: 'list',
    name: 'options',
    message: 'What do you like to create?',
    default: 'component',
    choices:['component','angular services','mock services']
  }];

function promptsTerminal() {
    return [{
        type: 'input',
        name: constants.component.FOLDER_NAME,
        message: constants.component.FOLDER_MESSAGE,
        default: constants.component.FOLDER_DEFAULT
    }, {
        type: 'input',
        name: constants.component.NGMODULE_NAME,
        message: constants.component.NGMODULE_MESSAGE,
        default: constants.component.NGMODULE_DEFAULT
    }, {
        type: 'input',
        name: constants.component.PATH_NAME,
        message: constants.component.PATH_MESSAGE,
        default: constants.component.PATH_DEFAULT
    }, {
        type: 'confirm',
        name: constants.component.TDD_NAME,
        message: constants.component.TDD_MESSAGE,
        default: constants.component.TDD_DEFAULT
    }];
}
// function promptsTerminal() {
//     return [{
//         type: 'input',
//         name: 'module',
//         message: 'Type the name of the AngularJs module?',
//         default: 'projectName'
//     }, {
//         type: 'input',
//         name: 'fileName',
//         message: 'Type the name of your component?',
//         default: 'testComponent'
//     }, {
//         type: 'input',
//         name: 'pathTemplates',
//         message: 'Type the path for templates?',
//         default: 'source/app/components'
//     }, {
//         type: 'confirm',
//         name: 'spec',
//         message: 'Do you want to include unit testing?',
//         default: true
//     }];
// }

function promptUser() {
    console.log(util.componentsTerminal());
    inquirer.prompt(util.componentsTerminal(), function(params) {
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
    promptsTerminal: promptsTerminal,
    promptUser: promptUser
};

module.exports = angularScaffold;
