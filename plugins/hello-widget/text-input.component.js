/**
 * Created by glenn on 08.01.17.
 */

(() => {
  'use strict';

  angular.module('helloWidgetApp.helloWidget').component('c8yHelloTextInput', {
    templateUrl: ':::PLUGIN_PATH:::/text-input.component.html',
    bindings: {
      config: '<'
    },
    controllerAs: 'vm',
    controller: Controller
  });

  /* @ngInject */
  function Controller() {
    const vm = this;
    const defaultConfig = { helloText: '' };

    _.assign(vm, {
      $onInit,
      $onChanges
    });

    ////////////

    function $onInit() {
      _.defaults(vm.config, defaultConfig);

      console.log(vm.config.helloText);
    }

    function $onChanges({ config }) {
      if (config) {
        onConfigChange(vm.config);
      }
    }

    function onConfigChange(config) {
      const deviceId = _.get(config, 'device.id');

      if (deviceId) {
        console.info('device id:', deviceId);
      }
    }
  }
})();
