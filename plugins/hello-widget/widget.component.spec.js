/**
 * Created by glenn on 09.01.17.
 */

describe('helloWidgetApp.helloWidget: c8yHelloWidget component', function () {
  var $injector;
  var $componentController;

  beforeEach(function () {
    common.globalBeforeWithUI();
    module('helloWidgetApp.helloWidget');

    inject(function (
      _$injector_,
      _$componentController_
    ) {
      $injector = _$injector_;
      $componentController = _$componentController_;
    });
  });

  it('component should exist', function () {
    expect($injector.has('c8yHelloWidgetDirective'))
      .toEqual(true);
  });

  describe('displaying text', function () {
    beforeEach(function () {
      //////////// stubbing dependencies

    });

    it('should display "hello, world" by default', function () {
      // given
      var textBinding;

      testDisplayingText(textBinding, 'hello, world');
    });

    it('should display text according to the text binding', function () {
      // given
      var textBinding = 'halo, dunia';

      testDisplayingText(textBinding, textBinding);
    });

    function testDisplayingText(textBinding, expectedText) {
      // when
      var controller = $componentController(
        'c8yHelloWidget', undefined, { text: textBinding });
      controller.$onInit();

      // then
      expect(controller.text)
        .toEqual(expectedText);
    }
  });
});
