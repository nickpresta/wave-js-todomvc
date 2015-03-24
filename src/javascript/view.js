(function(window) {
  'use strict';

  function View(template, el) {
    this.template = template;
    this.$el = el;
  }

  View.prototype.render = function(items, stats) {
    var $stats = this.$el.querySelector('#Stats');
    var statsStyle = 'none';
    if ($stats) {
      statsStyle = $stats.style.display;
    }
    if (statsStyle === 'block') {
      this.$el.innerHTML = this.template.content(items, stats, true);
    } else {
      this.$el.innerHTML = this.template.content(items, stats, false);
    }
  };

  View.prototype.toggleStats = function() {
    var $stats = this.$el.querySelector('#Stats');
    var display = $stats.style.display;
    $stats.style.display = (display === 'block') ? 'none' : 'block';
  };

  View.prototype.bind = function(event, handler) {
    if (event === 'toggleStats') {
      window.$live('.js-display-stats', 'click', function(e) {
        handler();
      }.bind(this));
    } else if (event === 'deleteItem') {
      window.$live('.js-item-delete', 'click', function(e) {
        handler({id: e.target.dataset.id});
      });
    } else if (event === 'reloadData') {
      window.$live('.js-reload-data', 'click', function(e) {
        handler();
      }.bind(this));
    }
  };

  window.app = window.app || {};
  window.app.View = View;
})(window);
