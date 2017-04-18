/**
 * Created by glenn on 08.01.17.
 */

(function () {
  'use strict';

  angular
    .module('helloWidgetApp.helloWidget')
    .component('c8yHelloTextInput', {
      template: '<input ng-model="vm.helloText">',
      bindings: {
        device: '<',
        helloText: '='
      },
      controller: Controller,
      controllerAs: 'vm'
    });

  function Controller() {
    const vm = this;

    _.assign(vm, {
      $onInit: onInit,
      $onChange: onChange
    });

    ////////////

    function onInit() {
      console.log(vm.helloText);

      vm.helloText = vm.helloText || '';
    }

    function onChange(changes) {
      if (changes.device) {
        onDeviceChange();
      }
    }

    function onDeviceChange() {
      const { device } = vm;

      if (device) {
        console.info('device id:', device.id);
      }
    }
  }
}());
