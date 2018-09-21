describe('Form', () => {
  let form;

  function createMockFileInput(id, file) {
    const inputEl = document.createElement('div');

    inputEl.setAttribute('type', 'file');
    inputEl.setAttribute('name', `file${id}`);
    inputEl.setAttribute('id', `upload${id}Btn`);
    inputEl.files = [file];

    return inputEl;
  }

  beforeEach(() => {
    const formEl = document.createElement('form');

    formEl.id = 'multiUploadForm';

    form = new rjc.Form(formEl);
  });

  it('should exist', () => {
    expect(form).toBeDefined();
    expect(form.get$Form()).toHaveLength(1);
  });

  it('should dispatch an event onSubmit containing the 1 uploaded file', (done) => {
    form.get$Form().append(createMockFileInput(0, {name: '0.jpg'}));

    form.onSubmit = (formData) => {
      const keys = [];

      for (let [key] of formData.entries()) {
        keys.push(key);
      }

      expect(keys.length).toEqual(1);

      done();
    };

    form.get$Form().trigger('submit');
  });

  it('should dispatch an event onSubmit containing the 1 uploaded files', (done) => {
    form.get$Form().append(createMockFileInput(0, {name: '0.jpg'}));
    form.get$Form().append(createMockFileInput(1, {name: '1.jpg'}));

    form.onSubmit = (formData) => {
      const keys = [];

      for (let [key] of formData.entries()) {
        keys.push(key);
      }

      expect(keys.length).toEqual(2);

      done();

      done();
    };

    form.get$Form().trigger('submit');
  });
});
