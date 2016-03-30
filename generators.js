var gulp = require('gulp'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    conflict = require("gulp-conflict"),
    path = require("path"),
    chalk = require('chalk');

function componentsGenerator(promptAnswers, options) {
    if (promptAnswers.testCase) {
        gulp.src(__dirname + '/templates/javascript/spec/controller.js')
            .pipe(template(promptAnswers))
            .pipe(rename(promptAnswers.fileName + '.spec.js'))
            .pipe(conflict(options.base + options.testSpecDir + '/'))
            .pipe(gulp.dest(options.base + options.testSpecDir + '/'));
    }

    gulp.src(__dirname + '/templates/javascript/components/*.controller.js')
        .pipe(template(promptAnswers))
        .pipe(rename(promptAnswers.fileName + '.controller.js'))
        .pipe(conflict(options.base + options.appDir + '/' + promptAnswers.scriptAppName))
        .pipe(gulp.dest(options.base + options.appDir + '/' + promptAnswers.fileName));

    gulp.src(__dirname + '/templates/javascript/components/*.directive.js')
        .pipe(template(promptAnswers))
        .pipe(rename(promptAnswers.fileName + '.directive.js'))
        .pipe(conflict(options.base + options.appDir + '/' + promptAnswers.scriptAppName))
        .pipe(gulp.dest(options.base + options.appDir + '/' + promptAnswers.fileName));

    gulp.src(__dirname + '/templates/javascript/components/*.html')
        .pipe(template(promptAnswers))
        .pipe(rename(promptAnswers.fileName + '.html'))
        .pipe(conflict(options.base + options.appDir + '/' + promptAnswers.scriptAppName))
        .pipe(gulp.dest(options.base + options.appDir + '/' + promptAnswers.fileName));

    gulp.src(__dirname + '/templates/javascript/components/*.scss')
        .pipe(template(promptAnswers))
        .pipe(rename(promptAnswers.fileName + '.scss'))
        .pipe(conflict(options.base + options.appDir + '/' + promptAnswers.scriptAppName))
        .pipe(gulp.dest(options.base + options.appDir + '/' + promptAnswers.fileName))
        .on('finish', function() {
            console.log("\n" + chalk.green("Success! - Component Created"));
            process.exit(1);
        });
}

function ngServiceGenerator() {
    console.log("create Angular Services");
}

function mockServiceGenerator() {
    console.log("create Angular Services");
}

var generators = {
    componentsGenerator: componentsGenerator,
    ngServiceGenerator: ngServiceGenerator,
    mockServiceGenerator: mockServiceGenerator
};

module.exports = generators;
