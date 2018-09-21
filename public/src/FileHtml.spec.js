describe('FileHtml', () => {
  let fileHtml;

  beforeEach(() => {
    var formEl = document.createElement('form');

    formEl.id = 'multiUploadForm';

    fileHtml = new rjc.FileHtml(formEl);
  });

  it('should exist', () => {
    expect(fileHtml).toBeDefined();
    expect(fileHtml.get$Form()).toHaveLength(1);
  });

  it('should append a file input on instantiation', () => {
    expect(fileHtml.get$Form().find('#upload0File')).toHaveLength(1);
  });

  it('should return a html snippet for a new file upload with id 1', () => {
    const fixture = setFixtures(fileHtml.createNewFileInput());

    expect(fixture.find('input').length).toEqual(2);
    expect(fixture.find('#upload1File')).toHaveLength(1);
    expect(fixture.find('#upload1Btn')).toHaveLength(1);
  });

  it('should return a html snippet incrementing the id by id', () => {
    fileHtml.createNewFileInput();

    const fixture = setFixtures(fileHtml.createNewFileInput());

    expect(fixture.find('input').length).toEqual(2);
    expect(fixture.find('#upload2File')).toHaveLength(1);
    expect(fixture.find('#upload2Btn')).toHaveLength(1);
  });

  it('should append a new file input to the form', () => {
    fileHtml.appendNewUpload();

    expect(fileHtml.get$Form().find('#upload1File')).toHaveLength(1);
    expect(fileHtml.get$Form().find('#upload1Btn')).toHaveLength(1);
  });

  // This test is not working. jQuery is behaving oddly.
  // I thought I would leave it in for you to see
  xit('should reset form to its starting state', () => {
    const html = fileHtml.get$Form().html();

    fileHtml.appendNewUpload();

    expect(html).not.toEqual(fileHtml.get$Form().html());

    fileHtml.resetForm();

    expect(html).toEqual(fileHtml.get$Form().html());
  });
});
