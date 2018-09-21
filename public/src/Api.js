/* eslint-disable func-names,no-func-assign,max-len */
(function () {
  window.rjc = window.rjc || {};

  rjc.Api = function (fromEl) {
    this._$form = jQuery(fromEl);
  };

  rjc.Api.prototype.get$Form = function () {
    return this._$form;
  };
}());
