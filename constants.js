var component = {
        FOLDER_NAME: 'fileName',
        FOLDER_MESSAGE: 'Type the name of your component?',
        FOLDER_DEFAULT: 'newComponent',

        NGMODULE_NAME: 'module',
        NGMODULE_MESSAGE: 'Type the name of the AngularJs module?',
        NGMODULE_DEFAULT: 'projectName',

        PATH_NAME: 'pathTemplates',
        PATH_MESSAGE: 'Type the path for templates?',
        PATH_DEFAULT: 'source/app/components',

        TDD_NAME: 'spec',
        TDD_MESSAGE: 'Do you want to include unit testing?',
        TDD_DEFAULT: true
};

var ngService = {

};

var mockService = {
    
};

var constants = {
      component: component,
      ngService: ngService,
    mockService: mockService
};

module.exports = Object.freeze(constants);
