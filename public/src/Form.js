/* eslint-disable func-names,no-func-assign,max-len */
(function () {
  window.rjc = window.rjc || {};

  function onFormSubmit(event) {
    var formData = new FormData();

    event.preventDefault();

    this.get$Form().find('*[name*=file]')
      .each(function (index, input) {
        if (input.files[0]) {
          formData.append('uploads[]', input.files[0]);
        }
      });

    this.onSubmit(formData);
  }

  rjc.Form = function (fromEl) {
    this._$form = jQuery(fromEl);
    this._$form.submit(onFormSubmit.bind(this));
  };

  rjc.Form.prototype.get$Form = function () {
    return this._$form;
  };

  // eslint-disable-next-line no-empty-function
  rjc.Form.prototype.onSubmit = function () {};
}());
