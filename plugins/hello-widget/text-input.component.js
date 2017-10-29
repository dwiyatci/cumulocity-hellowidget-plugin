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
        helloText: '=',
      },
      controllerAs: 'vm',
      controller: Controller,
    });

  function Controller() {
    const vm = this;

    _.assign(vm, {
      $onInit,
      $onChanges,
    });

    ////////////

    function $onInit() {
      console.log(vm.helloText);

      vm.helloText = vm.helloText || '';
    }

    function $onChanges({ device }) {
      if (device) {
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
