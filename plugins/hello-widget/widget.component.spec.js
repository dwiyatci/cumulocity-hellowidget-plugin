/**
 * Created by glenn on 09.01.17.
 */

describe('helloWidgetApp.helloWidget: c8yHelloWidget component', () => {
  'use strict';

  let $injector;
  let $componentController;

  beforeEach(() => {
    common.globalBeforeWithUI();
    module('helloWidgetApp.helloWidget');

    inject((
      _$injector_,
      _$componentController_,
    ) => {
      $injector = _$injector_;
      $componentController = _$componentController_;
    });
  });

  it('component should exist', () => {
    expect($injector.has('c8yHelloWidgetDirective'))
      .toEqual(true);
  });

  describe('displaying text', () => {
    beforeEach(() => {
      //////////// stubbing dependencies

    });

    it('should display "hello, world" by default', () => {
      // given
      const textBinding = undefined;

      testDisplayingText(textBinding, 'hello, world');
    });

    it('should display text according to the text binding', () => {
      // given
      const textBinding = 'halo, dunia';

      testDisplayingText(textBinding, textBinding);
    });

    function testDisplayingText(textBinding, expectedText) {
      // when
      const controller = $componentController('c8yHelloWidget', undefined, { config: { helloText: textBinding } });
      controller.$onInit();

      // then
      expect(controller.text)
        .toEqual(expectedText);
    }
  });
});
