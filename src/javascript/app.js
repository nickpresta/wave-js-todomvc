(function(app) {
  'use strict';

  function List(name, el) {
    this.storage = new app.Store(name);
    this.model = new app.Model(this.storage);
    this.template = new app.Template();
    this.view = new app.View(this.template, el);
    this.controller = new app.Controller(this.model, this.view);
  }

  var el = document.getElementById('content');
  var list = new List('receipts', el);
})(window.app);
