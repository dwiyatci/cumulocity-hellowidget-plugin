/**
 * Created by glenn on 08.01.17.
 */

(() => {
  'use strict';

  angular.module('helloWidgetApp.helloWidget').component('c8yHelloWidget', {
    template: '<div>{{vm.text}}</div>',
    bindings: {
      config: '<'
    },
    controllerAs: 'vm',
    controller: Controller
  });

  /* @ngInject */
  function Controller() {
    const vm = this;

    _.assign(vm, { $onInit });

    ////////////

    function $onInit() {
      vm.text = _.get(vm, 'config.helloText', 'hello, world');
    }
  }
})();
