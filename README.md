# Scaffolding Angular

NPM module to create boilerplates templates for angular projects

## Installation

In the terminal run the following command
- `npm install scaffolding-angular --save-dev`

## How to use

Import npm module in gulpfile.js or Gruntfile.js
```
var scaffolding = require('scaffolding-angular');
```

Create a Gulp or Grunt task
```
/* Scaffolding UI **/
gulp.task('scaffolding', function(done){
    scaffolding.appStart();
});
```

To run Scaffolding Angular in Gulp
- `gulp scaffolding`

```
/* Scaffolding UI **/
grunt.task.registerTask('scaffolding', 'Scaffolding UI', function() {
    scaffolding.appStart();
});
```

To run Scaffolding Angular in Grunt
- `grunt scaffolding`

## Development

In the terminal run the following commands
- `npm install`
- `node util.js`

Run test cases with mocha
- `npm test`

To publish the package in NPM change the version in package.json
- `"version": "x.x.x",`

And run the following command
- `npm publish`


## Bonus!!!! The Home Depot Logo in the terminal

In the terminal run the following command
- `sh ./images/image.sh`
