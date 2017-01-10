/**
 * Created by glenn on 1/8/17.
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
    var vm = this;
    var device;

    _.assign(vm, {
      $onInit: onInit,
      $doCheck: doCheck
    });

    ////////////

    function onInit() {
      console.log(vm.helloText);

      vm.helloText = vm.helloText || '';
    }

    function doCheck() {
      if (!_.isEqual(device, vm.device)) {
        device = vm.device;

        console.info('device id:', device.id);
      }
    }
  }
}());
