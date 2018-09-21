/* eslint-disable func-names */
(function () {
  var formEl = document.getElementById('multiUploadForm'),
    fileHtml = new rjc.FileHtml(formEl),
    form = new rjc.Form(formEl);

  function resetForm(data) {
    toastr.success(data.join(', ') + ' were uploaded.', 'Upload Success');

    fileHtml.resetForm();
  }

  form.onSubmit = function (formData) {
    var api = new rjc.Api();

    api.postUpload(formData, resetForm);
  };
}());
