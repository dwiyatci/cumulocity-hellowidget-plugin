(function () {
  'use strict';

  angular
    .module('helloWidgetApp.helloWidget')
    .config(configure);

  /* @ngInject */
  function configure(
    c8yComponentsProvider
  ) {
    c8yComponentsProvider.add({
      name: 'Hello Widget',
      nameDisplay: 'Hello',
      description: 'Displays that classic "hello, world" string',
      templateUrl: ':::PLUGIN_PATH:::/main.html',
      configTemplateUrl: ':::PLUGIN_PATH:::/config.html'
    });
  }
}());
