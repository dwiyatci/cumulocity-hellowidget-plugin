/**
 * Created by glenn on 08.01.17.
 */

(function () {
  'use strict';

  angular
    .module('helloWidgetApp.helloWidget')
    .component('c8yHelloWidget', {
      template: '<div>{{vm.text}}</div>',
      bindings: {
        text: '<',
      },
      controllerAs: 'vm',
      controller: Controller,
    });

  function Controller() {
    const vm = this;

    _.assign(vm, { $onInit });

    ////////////

    function $onInit() {
      vm.text = vm.text || 'hello, world';
    }
  }
}());
