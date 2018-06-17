/**
 * Created by glenn on 08.01.17.
 */

(() => {
  'use strict';

  angular.module('helloWidgetApp.helloWidget').component('c8yHelloTextInput', {
    template: `
      <div>
        Type your "hello, world" text (e.g. in your own language &#x1F47D;):
        <input ng-model="vm.config.helloText">
      </div>
    `,
    bindings: {
      config: '<'
    },
    controllerAs: 'vm',
    controller: Controller
  });

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
