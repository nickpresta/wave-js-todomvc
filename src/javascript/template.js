(function(window) {
  'use strict';

  function Template() {}

  Template.prototype.content = function(items, stats, showStats) {
    // FIXME: provide a default when showStats is not passed in
    showStats = showStats;
    // ENDFIXME

    var top = '' +
      '<div>' +
        '<h1 id="Heading" class="wv-heading--title"><i class="wv-icon--wave"></i> Receipts!</h1>' +
        '<button id="Reload" class="wv-button--danger js-reload-data"><i class="wv-icon--exclamation"></i> Reload Data</button>' +
        '<button id="Upload" class="wv-button js-display-stats"><i class="wv-icon--info"></i> Toggle Stats</button>' +
      '</div>';

    var statsDisplay = 'none';
    if (showStats) {
      statsDisplay = 'block';
    }
    var statsBox = '' +
      '<div id="Stats" style="clear: both; display: ' + statsDisplay + '">' +
        this.stats(stats) +
      '</div>';
    return top + statsBox + this.table(items);
  };

  Template.prototype.table = function(items) {
    // FIXME: is there another function we could use here
    // that would be more concise?
    // HINT: Think back to JS Koans and higher order functions
    var rows = [];
    items.forEach(function(item) {
      var row = this.row(item);
      rows.push(row);
    }.bind(this));
    // ENDFIXME

    var table = '' +
    '<table id="Table" class="wv-table">' +
      '<thead class="wv-table__header">' +
        '<tr class="wv-table__row">' +
          '<th class="status-column--heading"></th>' +
          '<th class="wv-table__cell">Date</th>' +
          '<th class="wv-table__cell">Merchant</th>' +
          '<th class="wv-table__cell--amount">Total</th>' +
          '<th class="action-column--heading"></th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' +
        rows.join('\n') +
      '</tbody>' +
    '</table>';
    return table;
  };

  Template.prototype.row = function(item) {
    var statusColor = {
      approved: '#43D387',
      processed: '#0FC5F1',
      errored: '#DB4F4F',
    }[item.status];

    var style = 'background-color: ' + statusColor;
    return '' +
      '<tr class="wv-table__row ' + item.status + '">' +
        '<td class="status-column--cell" style="' + style + '" />' +
        '<td class="wv-table__cell">' + item.date + '</td>' +
        '<td class="wv-table__cell">' + item.merchant + '</td>' +
        '<td class="wv-table__cell--amount">' + item.formattedTotal + '</td>' +
        '<td class="action-column--cell">' +
          '<i data-id="' + item.id + '" class="wv-icon--delete js-item-delete" title="Delete"></i>' +
        '</td>' +
      '</tr>';
  };

  Template.prototype.stats = function(counts) {
    var items = [];
    var total = counts.total;
    for (var key in counts) {
      if (key !== 'total') {
        var item = '' +
          '<tr class="wv-table__row">' +
          '<td class="wv-table__cell">' +
            key +
          '</td>' +
          '<td class="wv-table__cell--amount">' +
            counts[key] +
          '</td>' +
        '</tr>';
        items.push(item);
      }
    }
    var footer = '' +
      '<tr class="wv-table__row--total">' +
        '<td class="wv-table__cell">Total</td>' +
        '<td class="wv-table__cell--amount">' +
          counts.total +
        '</td>' +
      '</tr>';
    var stats = '' +
      '<table class="wv-table--plain">' +
        '<thead class="wv-table__header">' +
          '<tr class="wv-table__row">' +
            '<th class="wv-table__cell">Status</th>' +
            '<th class="wv-table__cell--amount">Total</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody class="wv-table__body">' +
          items.join('\n') +
        '</tbody>' +
        '<tfoot class="wv-table__footer">' +
          footer +
        '</tfoot>' +
      '</table>';

    return '' +
      '<div class="wv-box--gray wv-box--medium">' +
        '<div class="wv-box__title">Status Stats</div>' +
        '<div class="wv-box__content">' + stats + '</div>' +
      '</div>';
  };

  window.app = window.app || {};
  window.app.Template = Template;
})(window);
