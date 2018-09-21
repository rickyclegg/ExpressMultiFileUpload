/* eslint-disable func-names,no-func-assign,max-len */
(function () {
  window.rjc = window.rjc || {};

  function getIncrementId() {
    this._currentId += 1;

    return this._currentId;
  }

  function updateInputChangeHandlers() {
    var self = this;

    this._$form.find('input[name*=file]').change(function () {
      document.getElementById(this.id.replace('Btn', 'File')).value = this.files[0].name;

      self.appendNewUpload();
    });
  }

  rjc.FileHtml = function (fromEl) {
    this._currentId = -1;
    this._$form = $(fromEl);
    this.appendNewUpload();
  };

  rjc.FileHtml.prototype.get$Form = function () {
    return this._$form;
  };

  rjc.FileHtml.prototype.appendNewUpload = function () {
    this._$form.append(this.createNewFileInput());

    updateInputChangeHandlers.call(this);
  };

  rjc.FileHtml.prototype.createNewFileInput = function () {
    var id = getIncrementId.call(this);

    return `<div class="mdl-textfield mdl-js-textfield mdl-textfield--file">
              <input class="mdl-textfield__input" placeholder="File" type="text" name="upload${id}File" id="upload${id}File" readonly/>
              <div class="mdl-button mdl-button--primary mdl-button--icon mdl-button--file">
                <i class="material-icons">attach_file</i><input type="file" name="file${id}" id="upload${id}Btn">
              </div>
            </div>`;
  };
}());
