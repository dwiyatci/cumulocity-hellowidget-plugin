(function () {
  'use strict';

  angular
    .module('c8y.parts.hellowidget')
    .controller('HelloWidgetController', HelloWidgetController);

  function HelloWidgetController() {
    var vm = this;

    vm.text = 'hello, world';
  }
}());
