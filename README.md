# Scaffolding Angular

Simple tool to create an angular scaffolding

## Installation

In the terminal run the following command
- `npm install scaffolding-angular --save`

## How to use

Import npm module in gulpfile.js or Gruntfile.js
```
var scaffolding = require('scaffolding-angular');
```

Create a Gulp or Grunt task
```
/* Scaffolding UI **/
gulp.task('scaffolding', function(done){
    scaffolding(__dirname);
});
```

```
/* Scaffolding UI **/
grunt.task.registerTask('scaffolding', 'Scaffolding UI', function() {
    scaffolding(__dirname);
});
```

To run Scaffolding Angular
- `gulp scaffolding`
- `grunt scaffolding`

## Development

In the terminal run the following commands
- `npm install`
- `node test.js`

Run test cases with mocha
- `npm test`

To publish the package in NPM change the version in package.json
- `"version": "1.0.x",`

And run the following command
- `npm publish`
