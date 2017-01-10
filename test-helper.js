(function () {
  'use strict';

  initBackendMocks();

  window.common = {
    globalBeforeWithUI: globalBeforeWithUI,
    globalBefore: globalBefore
  };

  ////////////

  function initBackendMocks() {
    angular
      .module('c8y.backendMocks', [])
      .run(runBlock);

    /* @ngInject */
    function runBlock(
      $httpBackend
    ) {
      $httpBackend
        .when('GET', /\/user\/currentUser(.*)/)
        .respond({});
    }
  }

  function globalBeforeWithUI() {
    globalBefore();
    module('c8y.ui');
  }

  function globalBefore() {
    module(function ($provide) {
      $provide.value('info', {});
    });
    module('c8y.core');
    module('c8y.backendMocks');
    module('c8yHtml.test');
  }
}());
