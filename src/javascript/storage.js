(function(window) {
  'use strict';

  function reset(name) {
    var data = '{"meta":{"limit":20,"next":null,"offset":0,"previous":null,"total_count":5},"items":[{"account_pk":40738560,"bill_number":"","business_uuid":"57d4bab7-362c-11e2-b840-00163ead23c4","currency_code":"CAD","date":"2013-03-17","due_date":"2013-03-17","id":1239,"images":[{"file":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/1239/0ee9db62-2bd1-4039-8c3c-bb8d1c0fd352.jpeg","id":1276,"medium_size":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/1239/0ee9db62-2bd1-4039-8c3c-bb8d1c0fd352.jpeg.400x0_q85.jpg","receipt_id":1239,"resource_uri":"/api/receipts/1239/images/1276/","thumbnail":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/1239/0ee9db62-2bd1-4039-8c3c-bb8d1c0fd352.jpeg.100x100_q85.jpg"}],"merchant":"Fuel","modified_at":"2013-03-18T10:53:14","note":"","paid":false,"payment_account_pk":40738526,"receipt_type":"standard","resource_uri":"/api/receipts/1239/","status":"processed","status_display":"Processed","submitted_at":"2013-03-17T21:50:08","subtotal":0.0,"taxes":[{"id":757,"receipt_id":1239,"resource_uri":"/api/receipts/1239/taxes/757/","tax_amount":0.0,"tax_type_pk":null}],"total":38.32},{"account_pk":21528630,"bill_number":"","business_uuid":"57d4bab7-362c-11e2-b840-00163ead23c4","currency_code":"CAD","date":"2014-02-07","due_date":null,"id":688908,"images":[{"file":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/688908/52d93df5-afd2-4b77-883a-bf41fd732da4.jpg","id":664234,"medium_size":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/688908/52d93df5-afd2-4b77-883a-bf41fd732da4.jpg.400x0_q85.jpg","receipt_id":688908,"resource_uri":"/api/receipts/688908/images/664234/","thumbnail":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/688908/52d93df5-afd2-4b77-883a-bf41fd732da4.jpg.100x100_q85.jpg"}],"merchant":"GO Train","modified_at":"2014-02-14T21:27:40","note":"","paid":false,"payment_account_pk":46915878,"receipt_type":"standard","resource_uri":"/api/receipts/688908/","status":"approved","status_display":"Verified","submitted_at":"2014-02-14T21:16:29","subtotal":0.0,"taxes":[],"total":6.25},{"account_pk":21528597,"bill_number":"","business_uuid":"57d4bab7-362c-11e2-b840-00163ead23c4","currency_code":"CAD","date":"2013-04-13","due_date":null,"id":17732,"images":[{"file":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/17732/3fde66c7-cbde-42a3-a428-74cc7c92409c.jpeg","id":17426,"medium_size":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/17732/3fde66c7-cbde-42a3-a428-74cc7c92409c.jpeg.400x0_q85.jpg","receipt_id":17732,"resource_uri":"/api/receipts/17732/images/17426/","thumbnail":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/17732/3fde66c7-cbde-42a3-a428-74cc7c92409c.jpeg.100x100_q85.jpg"}],"merchant":"East Side Marios","modified_at":"2013-10-25T12:56:13","note":"","paid":false,"payment_account_pk":46915878,"receipt_type":"standard","resource_uri":"/api/receipts/17732/","status":"approved","status_display":"Verified","submitted_at":"2013-04-13T15:39:46","subtotal":35.66,"taxes":[],"total":40.29},{"account_pk":40738560,"bill_number":"","business_uuid":"57d4bab7-362c-11e2-b840-00163ead23c4","currency_code":"CAD","date":"2013-03-15","due_date":"2013-03-15","id":1192,"images":[{"file":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/1192/c7d2a4e1-fbc9-4891-a522-41612285d5a3.jpeg","id":1225,"medium_size":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/1192/c7d2a4e1-fbc9-4891-a522-41612285d5a3.jpeg.400x0_q85.jpg","receipt_id":1192,"resource_uri":"/api/receipts/1192/images/1225/","thumbnail":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/1192/c7d2a4e1-fbc9-4891-a522-41612285d5a3.jpeg.100x100_q85.jpg"}],"merchant":"Optimum","modified_at":"2013-04-02T22:28:05","note":"","paid":false,"payment_account_pk":40738526,"receipt_type":"standard","resource_uri":"/api/receipts/1192/","status":"errored","status_display":"Verified","submitted_at":"2013-03-15T17:03:07","subtotal":0.0,"taxes":[{"id":722,"receipt_id":1192,"resource_uri":"/api/receipts/1192/taxes/722/","tax_amount":0.0,"tax_type_pk":null}],"total":12.42},{"account_pk":40738560,"bill_number":"","business_uuid":"57d4bab7-362c-11e2-b840-00163ead23c4","currency_code":"CAD","date":"2013-03-17","due_date":"2013-03-17","id":1238,"images":[{"file":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/1238/a57c00d6-5049-4f7b-b256-88893b2517b2.jpeg","id":1275,"medium_size":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/1238/a57c00d6-5049-4f7b-b256-88893b2517b2.jpeg.400x0_q85.jpg","receipt_id":1238,"resource_uri":"/api/receipts/1238/images/1275/","thumbnail":"https://almond.nibbler.io/v1/AUTH_263da6f80bed486c870952d18a235a51/receipts/media/receipt_images/1238/a57c00d6-5049-4f7b-b256-88893b2517b2.jpeg.100x100_q85.jpg"}],"merchant":"Petro Canada","modified_at":"2013-03-17T22:18:20","note":"","paid":false,"payment_account_pk":40738526,"receipt_type":"standard","resource_uri":"/api/receipts/1238/","status":"approved","status_display":"Verified","submitted_at":"2013-03-17T21:49:57","subtotal":0.0,"taxes":[{"id":756,"receipt_id":1238,"resource_uri":"/api/receipts/1238/taxes/756/","tax_amount":3.29,"tax_type_pk":null}],"total":-128.38}]}';
    window.localStorage[name] = data;
  };

  function Store(name) {
    this._storeName = name;
    if (!window.localStorage[this._storeName]) {
      var data = {
        items: []
      };
      window.localStorage[this._storeName] = JSON.stringify(data);
    }
  };

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
    cb = cb || function() {};
    reset(this._storeName);
    cb.call(this, JSON.parse(window.localStorage[this._storeName]).items);
  };

  window.app = window.app || {};
  window.app.Store = Store;
})(window);
