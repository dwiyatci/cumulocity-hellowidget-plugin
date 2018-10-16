/**
 * Created by glenn on 09.01.17.
 */

describe('helloWidgetApp.helloWidget: c8yHelloWidget component', () => {
  'use strict';

  it('component should exist', () => {
    const { $injector } = setup();

    expect($injector.has('c8yHelloTextInputDirective')).toEqual(true);
  });

  describe('configuring text', () => {
    it('should correctly configure text by default', () => {
      // given
      const helloText = undefined;

      testConfiguringText(helloText, '');
    });

    it('should correctly configure text according to the text binding', () => {
      // given
      const helloText = 'halo, dunia';

      testConfiguringText(helloText, helloText);
    });

    function testConfiguringText(helloText, expectedConfiguredText) {
      // when
      const element = createComponent(
        '<c8y-hello-text-input config="config"></c8y-hello-text-input>',
        { config: { helloText } }
      );

      // then
      expect(element.scope().config.helloText).toEqual(expectedConfiguredText);
    }

    function createComponent(template, bindings) {
      const { $rootScope, $compile } = setup();
      const $scope = _.assign($rootScope.$new(), bindings);

      const element = $compile(template)($scope);
      $scope.$apply();

      return element;
    }
  });

  function setup() {
    const setupVariables = {};

    common.globalBeforeWithUI();
    angular.mock.module('helloWidgetApp.helloWidget');

    inject(($injector) => _.assign(setupVariables, {
      $injector,
      $rootScope: $injector.get('$rootScope'),
      $compile: $injector.get('$compile')
    }));

    return setupVariables;
  }
});
