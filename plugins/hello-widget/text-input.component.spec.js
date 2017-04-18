/**
 * Created by glenn on 09.01.17.
 */

describe('helloWidgetApp.helloWidget: c8yHelloWidget component', () => {
  let $injector;
  let $rootScope;
  let $compile;

  beforeEach(() => {
    common.globalBeforeWithUI();
    module('helloWidgetApp.helloWidget');

    inject(
      (
        _$injector_,
        _$rootScope_,
        _$compile_
      ) => {
        $injector = _$injector_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
      }
    );
  });

  it('component should exist', () => {
    expect($injector.has('c8yHelloTextInputDirective'))
      .toEqual(true);
  });

  describe('configuring text', () => {
    beforeEach(() => {
      //////////// stubbing dependencies

    });

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
        '<c8y-hello-text-input hello-text="config.helloText" />', { config: { helloText } });

      // then
      expect(element.scope().config.helloText)
        .toEqual(expectedConfiguredText);
    }

    function createComponent(template, bindings) {
      const $scope = _.assign($rootScope.$new(), bindings);

      const element = $compile(template)($scope);
      $scope.$apply();

      return element;
    }
  });
});
