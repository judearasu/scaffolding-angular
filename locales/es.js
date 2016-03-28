var optionList = {
    NAME: 'options',
    MESSAGE: '¿Qué le gustaria crear?',
    CHOICES: ['Component', 'Angular Services', 'Mock Services'],
    DEFAULT: 'Component',
};

var component = {
    FOLDER_NAME: 'fileName',
    FOLDER_MESSAGE: 'Escriba el nombre de su componente?',
    FOLDER_DEFAULT: 'nuevoComponente',

    NGMODULE_NAME: 'module',
    NGMODULE_MESSAGE: 'Escriba el nombre del módulo de AngularJS?',
    NGMODULE_DEFAULT: 'nombreProyecto',

    PATH_NAME: 'pathTemplates',
    PATH_MESSAGE: 'Escriba el nombre del módulo AngularJS?',
    PATH_DEFAULT: 'source/app/components',

    TDD_NAME: 'spec',
    TDD_MESSAGE: '¿Quieres incluir las pruebas unitarias?',
    TDD_DEFAULT: true
};

var ngService = {
    FOLDER_NAME: 'fileName',
    FOLDER_MESSAGE: 'Escriba el nombre de su servicio de AngularJS?',
    FOLDER_DEFAULT: 'nuevo-servicio',
};

var mockService = {
    FOLDER_NAME: 'fileName',
    FOLDER_MESSAGE: 'Escriba el nombre de su servicio Mock?',
    FOLDER_DEFAULT: 'nuevo-servicio-mock',
};

var constants = {
    optionList: optionList,
    component: component,
    ngService: ngService,
    mockService: mockService
};

module.exports = Object.freeze(constants);
