/**
 * Created by glenn on 18.09.16.
 */

(function () {
  'use strict';

  angular
    .module('helloWidgetApp.helloWidget')
    .config(configure);

  /* @ngInject */
  function configure(
    c8yComponentsProvider,
    gettext
  ) {
    c8yComponentsProvider.add({
      name: 'hello',
      nameDisplay: gettext('Hello'),
      description: gettext('Displays that classic "hello, world" string'),
      templateUrl: ':::PLUGIN_PATH:::/main.html',
      configTemplateUrl: ':::PLUGIN_PATH:::/config.html'
    });
  }
}());
