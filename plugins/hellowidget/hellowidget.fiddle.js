(function () {
  'use strict';

  angular
    .module('c8y.parts.hellowidget')
    .run(runBlock);

  runBlock.$inject = [
    'c8ySystem'
  ];

  function runBlock(
    c8ySystem
  ) {
    c8ySystem
      .getUIVersion()
      .then(function (version) {
        console.log(version);
      });

    // Put your fiddle code here.
    console.log('hello, world');
  }
}());
