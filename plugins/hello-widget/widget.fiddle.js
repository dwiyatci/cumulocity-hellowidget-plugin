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
    (async () => {
      const version = await c8ySystem.getUIVersion();

      console.log(version);

      // Put your fiddle code here.
      console.log('hello, world');
    })();
  }
}());
