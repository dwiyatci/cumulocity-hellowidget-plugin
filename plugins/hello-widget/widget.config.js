/**
 * Created by glenn on 18.09.16.
 */

(() => {
  'use strict';

  angular.module('helloWidgetApp.helloWidget').config(configure);

  /* @ngInject */
  function configure(c8yComponentsProvider, gettext) {
    c8yComponentsProvider.add({
      name: 'hello',
      nameDisplay: gettext('Hello'),
      description: gettext('Displays that classic "hello, world" string'),
      widgetComponent: 'c8yHelloWidget',
      configComponent: 'c8yHelloTextInput',
      options: {
        noDeviceTarget: false,
        noNewWidgets: false,
        deviceTargetNotRequired: false,
        groupsSelectable: false
      }
    });
  }
})();
