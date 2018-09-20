/* eslint-disable func-names,no-func-assign,max-len */
(function () {
  window.rjc = window.rjc || {};

  function getIncrementId() {
    this._currentId += 1;

    return this._currentId;
  }

  rjc.FileHtml = function (fromEl) {
    this._currentId = -1;
    this._$form = jQuery(fromEl);
    this.appendNewUpload();
  };

  rjc.FileHtml.prototype.get$Form = function () {
    return this._$form;
  };

  rjc.FileHtml.prototype.appendNewUpload = function () {
    this._$form.append(this.createNewFileInput());
  };

  rjc.FileHtml.prototype.createNewFileInput = function () {
    var id = getIncrementId.call(this);

    return `<div class="mdl-textfield mdl-js-textfield mdl-textfield--file">
              <input class="mdl-textfield__input" placeholder="File" type="text" id="upload${id}File" readonly/>
              <div class="mdl-button mdl-button--primary mdl-button--icon mdl-button--file">
                <i class="material-icons">attach_file</i><input type="file" id="upload${id}Btn">
              </div>
            </div>`;
  };
}());
