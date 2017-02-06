/**
 * Created by glenn on 18.09.16.
 */

(function () {
  'use strict';

  angular
    .module('helloWidgetApp.helloWidget')
    .run(runBlock);

  /* @ngInject */
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
