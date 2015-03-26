(function(window) {
  'use strict';

  function reset(name) {
    var data = '{"items":[{"id":1,"merchant":"Fido","status":"processed","total":38.32, "date":"2014-03-17"},{"id":2,"merchant":"GO Train","status":"errored","total":6.25, "date":"2014-02-07"},{"id":3,"merchant":"Dominos Pizza","status":"processed","total":40.29, "date":"2014-01-25"},{"id":4,"merchant":"Best Buy CA","status":"processed","total":-48.42, "date":"2014-04-13"},{"id":5,"merchant":"Petro Canada","status":"approved","total":128.39, "date":"2014-07-30"}]}';
    window.localStorage[name] = data;
  }

  function Store(name) {
    this._storeName = name;
    if (!window.localStorage[this._storeName]) {
      var data = {
        items: []
      };
      window.localStorage[this._storeName] = JSON.stringify(data);
    }
  }

  Store.prototype.list = function(cb) {
    var items = JSON.parse(window.localStorage[this._storeName]).items;
    cb.call(this, items);
  };

  Store.prototype.query = function(query, cb) {
    if (!cb) {
      return;
    }

    var items = JSON.parse(window.localStorage[this._storeName]).items;
    cb.call(this, items.filter(function(item) {
      for (var q in query) {
        if (query[q] !== item[q]) {
          return false;
        }
      }
      return true;
    }));
  };

  Store.prototype.remove = function(id, cb) {
    var data = JSON.parse(window.localStorage[this._storeName]);
    var items = data.items;

    for (var i = 0; i < items.length; i++) {
      if (items[i].id === parseInt(id, 10)) {
        items.splice(i, 1);
        break;
      }
    }

    window.localStorage[this._storeName] = JSON.stringify(data);
    cb.call(this, JSON.parse(window.localStorage[this._storeName]).items);
  };

  Store.prototype.reset = function(cb) {
    reset(this._storeName);
    cb.call(this, JSON.parse(window.localStorage[this._storeName]).items);
  };

  window.app = window.app || {};
  window.app.Store = Store;
})(window);
