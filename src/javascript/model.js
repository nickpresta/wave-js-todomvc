(function(window) {
  'use strict';

  function Model(storage) {
    this.storage = storage;
  }

  Model.prototype.list = function(cb) {
    this.storage.list(cb);
  };

  Model.prototype.remove = function(id, cb) {
    this.storage.remove(id, cb);
  };

  Model.prototype.reset = function(cb) {
    this.storage.reset(cb);
  };

  Model.prototype.getStats = function(items, cb) {
    var itemsCount = {total: 0};

    items.forEach(function(item) {
      itemsCount[item.status] = itemsCount[item.status] + 1 || 1;
      itemsCount.total++;
    });
    cb(itemsCount);
  };

  window.app = window.app || {};
  window.app.Model = Model;
})(window);
