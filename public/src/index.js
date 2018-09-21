/* eslint-disable func-names */
(function () {
  var formEl = document.getElementById('multiUploadForm'),
    fileHtml = new rjc.FileHtml(formEl),
    form = new rjc.Form(formEl);

  form.onSubmit = function (files) {
    console.log('Files to upload', files);
  };
}());
