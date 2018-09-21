describe('Form', () => {
  let form;

  function createMockFileInput(id, file) {
    var inputEl = document.createElement('div');

    inputEl.setAttribute('type', 'file');
    inputEl.setAttribute('name', `file${id}`);
    inputEl.setAttribute('id', `upload${id}Btn`);
    inputEl.files = [file];

    return inputEl;
  }

  beforeEach(() => {
    var formEl = document.createElement('form');

    formEl.id = 'multiUploadForm';

    form = new rjc.Form(formEl);
  });

  it('should exist', () => {
    expect(form).toBeDefined();
    expect(form.get$Form()).toHaveLength(1);
  });

  it('should dispatch an event onSubmit containing the 1 uploaded file', (done) => {
    form.get$Form().append(createMockFileInput(0, {name: '0.jpg'}));

    form.onSubmit = function (files) {
      expect(files[0].name).toEqual('0.jpg');
      expect(files.length).toEqual(1);

      done();
    };

    form.get$Form().trigger('submit');
  });

  it('should dispatch an event onSubmit containing the 1 uploaded files', (done) => {
    form.get$Form().append(createMockFileInput(0, {name: '0.jpg'}));
    form.get$Form().append(createMockFileInput(1, {name: '1.jpg'}));

    form.onSubmit = function (files) {
      expect(files[0].name).toEqual('0.jpg');
      expect(files[1].name).toEqual('1.jpg');
      expect(files.length).toEqual(2);

      done();
    };

    form.get$Form().trigger('submit');
  });
});
