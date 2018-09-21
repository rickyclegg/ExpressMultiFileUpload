describe('FileHtml', () => {
  let api;

  beforeEach(() => {
    var formEl = document.createElement('form');

    formEl.id = 'multiUploadForm';

    api = new rjc.Api(formEl);
  });

  it('should exist', () => {
    expect(api).toBeDefined();
    expect(api.get$Form()).toHaveLength(1);
  });
});
