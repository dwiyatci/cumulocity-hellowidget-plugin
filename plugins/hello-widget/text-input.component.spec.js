/**
 * Created by glenn on 09.01.17.
 */

describe('helloWidgetApp.helloWidget: c8yHelloWidget component', function () {
  var $injector;
  var $rootScope;
  var $compile;

  beforeEach(function () {
    common.globalBeforeWithUI();
    module('helloWidgetApp.helloWidget');

    inject(function (
      _$injector_,
      _$rootScope_,
      _$compile_
    ) {
      $injector = _$injector_;
      $rootScope = _$rootScope_;
      $compile = _$compile_;
    });
  });

  it('component should exist', function () {
    expect($injector.has('c8yHelloTextInputDirective'))
      .toEqual(true);
  });

  describe('configuring text', function () {
    beforeEach(function () {
      //////////// stubbing dependencies

    });

    it('should correctly configure text by default', function () {
      // given
      var helloText;

      testConfiguringText(helloText, '');
    });

    it('should correctly configure text according to the text binding', function () {
      // given
      var helloText = 'halo, dunia';

      testConfiguringText(helloText, helloText);
    });

    function testConfiguringText(helloText, expectedConfiguredText) {
      // when
      var template = '<c8y-hello-text-input hello-text="config.helloText" />';

      var element = createComponent(template);

      if (_.isString(helloText)) {
        element.controller('c8yHelloTextInput').helloText = helloText;
        $rootScope.$apply();
      }

      // then
      expect(element.scope().config.helloText)
        .toEqual(expectedConfiguredText);
    }

    function createComponent(template, bindings) {
      var $scope = _.assign($rootScope.$new(), bindings);

      var element = $compile(template)($scope);
      $scope.$apply();

      return element;
    }
  });
});
