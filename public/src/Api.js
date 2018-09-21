/* eslint-disable func-names,no-func-assign,max-len */
(function () {
  window.rjc = window.rjc || {};

  // eslint-disable-next-line no-empty-function
  rjc.Api = function () {};

  rjc.Api.prototype.postUpload = function (formData, cb) {
    $.ajax({
      cache: false,
      contentType: false,
      data: formData,
      method: 'POST',
      processData: false,
      success: cb,
      url: '/api/upload'
    });
  };
}());
