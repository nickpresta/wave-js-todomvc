(function(window) {
  'use strict';

  function Controller(model, view) {
    this.model = model;
    this.view = view;

    this.view.bind('toggleStats', function() {
      this.toggleStats();
    }.bind(this));

    this.view.bind('deleteItem', function(item) {
      this.removeItem(item.id);
    }.bind(this));

    this.view.bind('reloadData', function() {
      this.reloadData();
    }.bind(this));

    this.render();
  }

  Controller.prototype.render = function() {
    this.model.list(function(items) {
      this._render(items);
    }.bind(this));
  };

  Controller.prototype._render = function(items) {
    var formattedItems = _formatItems(items);
    var stats = this.model.getStats(formattedItems, function(stats) {
      this.view.render(items, stats);
    }.bind(this));
  };

  Controller.prototype.removeItem = function(id) {
    this.model.remove(id, function(items) {
      this._render(items);
    }.bind(this));
  };

  Controller.prototype.toggleStats = function() {
    this.view.toggleStats();
  };

  Controller.prototype.reloadData = function() {
    this.model.reset(function(items) {
      this._render(items);
    }.bind(this));
  };

  function _formatItems(items) {
    var data = items.slice();
    data.forEach(function(i) {
      i.formattedTotal = _formatAmount(i.total);
    });
    return data;
  }

  function _formatAmount(amount) {
    var sign = Math.sign(amount);
    if (sign >= 0) {
      return '$' + amount;
    } else if (sign === -1) {
      return '($' + (amount * -1) + ')';
    } else {
      return amount;
    }
  }

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);
