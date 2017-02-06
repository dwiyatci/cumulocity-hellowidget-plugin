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
        text: '<'
      },
      controller: Controller,
      controllerAs: 'vm'
    });

  function Controller() {
    var vm = this;

    _.assign(vm, {
      $onInit: onInit
    });

    ////////////

    function onInit() {
      vm.text = vm.text || 'hello, world';
    }
  }
}());
