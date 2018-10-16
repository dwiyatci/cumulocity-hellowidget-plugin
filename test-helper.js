(() => {
  'use strict';

  window.c8y_testing = true;

  window.common = {
    globalBeforeWithUI,
    globalBefore
  };

  patchCurrentUserBackend();

  ////////////

  function globalBeforeWithUI() {
    globalBefore();
    angular.mock.module('c8y.ui');
  }

  function globalBefore() {
    angular.mock.module(($provide) => {
      $provide.value('info', {
        skipSwitchingToDefaultLanguage: true
      });
    });
    angular.mock.module('c8y.core');
    angular.mock.module('c8y.currentUserBackendPatch');

    const jestEnabled = window.test;
    if (!jestEnabled) {
      angular.mock.module('c8yHtml.test');
    }
  }

  function patchCurrentUserBackend() {
    angular
      .module('c8y.currentUserBackendPatch', [])
      .run(runBlock);

    /* @ngInject */
    function runBlock(
      $httpBackend
    ) {
      $httpBackend.whenGET(/\/user\/currentUser(.*)/)
        .respond({});
    }
  }
})();
