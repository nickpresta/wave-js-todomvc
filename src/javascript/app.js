import Store from './storage';

class List {
  constructor(name, el) {
    this.storage = new Store(name);
    this.model = new window.app.Model(this.storage);
    this.template = new window.app.Template();
    this.view = new window.app.View(this.template, el);
    this.controller = new window.app.Controller(this.model, this.view);
  }
}

let el = document.getElementById('content');
let list = new List('receipts', el);
