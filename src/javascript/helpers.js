(function(window) {
  'use strict';

  window.$live = (function () {
    var eventRegistry = {};

    function dispatchEvent(event) {
      var targetElement = event.target;

      eventRegistry[event.type].forEach(function (entry) {
        var potentialElements = window.document.querySelectorAll(entry.selector);
        var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

        if (hasMatch) {
          entry.handler.call(targetElement, event);
        }
      });
    }

    return function (selector, event, handler) {
      if (!eventRegistry[event]) {
        eventRegistry[event] = [];
        window.document.documentElement.addEventListener(event, dispatchEvent, true);
      }

      eventRegistry[event].push({
        selector: selector,
        handler: handler
      });
    };
  }());
})(window);
