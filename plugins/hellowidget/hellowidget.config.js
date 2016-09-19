(function () {
  'use strict';

  angular
    .module('c8y.parts.hellowidget')
    .config(configure);

  configure.$inject = [
    'c8yComponentsProvider'
  ];

  function configure(
    c8yComponentsProvider
  ) {
    c8yComponentsProvider.add({
      name: 'Hello Widget',
      nameDisplay: 'Hello',
      description: 'Displays that classic "hello, world" string',
      templateUrl: ':::PLUGIN_PATH:::/views/hellowidget.main.html',
      configTemplateUrl: ':::PLUGIN_PATH:::/views/hellowidget.config.html'
    });
  }
}());
