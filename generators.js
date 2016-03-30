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

function ngServiceGenerator(promptAnswers, options) {
    gulp.src(__dirname + '/templates/javascript/service/*.service.js')
        .pipe(template(promptAnswers))
        .pipe(rename(promptAnswers.fileName + '.module.js'))
        .pipe(conflict(options.base + options.serviceDir + '/' + promptAnswers.scriptAppName))
        .pipe(gulp.dest(options.base + options.serviceDir + '/' + promptAnswers.fileName));
    gulp.src(__dirname + '/templates/javascript/service/*.module.js')
        .pipe(template(promptAnswers))
        .pipe(rename(promptAnswers.fileName + '.js'))
        .pipe(conflict(options.base + options.serviceDir + '/' + promptAnswers.scriptAppName))
        .pipe(gulp.dest(options.base + options.serviceDir + '/' + promptAnswers.fileName));
    gulp.src(__dirname + '/templates/javascript/spec/service.js')
        .pipe(template(promptAnswers))
        .pipe(rename(promptAnswers.fileName + '.spec.js'))
        .pipe(conflict(options.base + options.testSpecDir + '/'))
        .pipe(gulp.dest(options.base + options.testSpecDir + '/'))
        .on('finish', function() {
            console.log("\n" + chalk.green("Success! - Service Created"));
            process.exit(1);
        });
}

function mockServiceGenerator(promptAnswers, options) {
    if (promptAnswers.testCase) {
        gulp.src(__dirname + '/templates/javascript/spec/mock-service.js')
            .pipe(template(promptAnswers))
            .pipe(rename(promptAnswers.fileName + '.spec.js'))
            .pipe(conflict(options.base + options.testSpecDir + '/'))
            .pipe(gulp.dest(options.base + options.testSpecDir + '/'));
            console.log(options.base + options.testSpecDir);
    }
    gulp.src(__dirname + '/templates/javascript/mocks/*.mocks.js')
        .pipe(template(promptAnswers))
        .pipe(rename(promptAnswers.fileName + '.js'))
        .pipe(conflict(options.base + options.appDir + '/' + promptAnswers.scriptAppName))
        .pipe(gulp.dest(options.base + options.appDir + '/'))
        .on('finish', function() {
            console.log("\n" + chalk.green("Success! - Component Created"));
            process.exit(1);
        });
}

var generators = {
    componentsGenerator: componentsGenerator,
    ngServiceGenerator: ngServiceGenerator,
    mockServiceGenerator: mockServiceGenerator
};

module.exports = generators;
