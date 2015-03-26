function reset(name) {
  const data = '{"items":[{"id":1,"merchant":"Fido","status":"processed","total":38.32, "date":"2014-03-17"},{"id":2,"merchant":"GO Train","status":"errored","total":6.25, "date":"2014-02-07"},{"id":3,"merchant":"Dominos Pizza","status":"processed","total":40.29, "date":"2014-01-25"},{"id":4,"merchant":"Best Buy CA","status":"processed","total":-48.42, "date":"2014-04-13"},{"id":5,"merchant":"Petro Canada","status":"approved","total":128.39, "date":"2014-07-30"}]}';
  window.localStorage[name] = data;
}

export default class Store {
  constructor(name) {
    this._storeName = name;
    if (!window.localStorage[this._storeName]) {
      reset(name);
    }
  }

  list(cb) {
    let items = JSON.parse(window.localStorage[this._storeName]).items;
    cb.call(this, items);
  };

  remove(id, cb) {
    let data = JSON.parse(window.localStorage[this._storeName]);
    let items = data.items;

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === parseInt(id, 10)) {
        items.splice(i, 1);
        break;
      }
    }

    window.localStorage[this._storeName] = JSON.stringify(data);
    cb.call(this, JSON.parse(window.localStorage[this._storeName]).items);
  };

  reset(cb) {
    reset(this._storeName);
    cb.call(this, JSON.parse(window.localStorage[this._storeName]).items);
  };
}

export default Store;
