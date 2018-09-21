describe('Api', () => {
  let api;

  function createFile(fileName) {
    return {file: [{'name': fileName, 'size': 1018, 'type': 'application/binary'}]};
  }

  beforeEach(() => {
    jasmine.Ajax.install();

    api = new rjc.Api();
  });

  afterEach(() => {
    jasmine.Ajax.uninstall();
  });

  it('should exist', () => {
    expect(api).toBeDefined();
  });

  it('should post to api/upload with 2 files', () => {
    const formData = new FormData();

    formData.append('uploads[]', createFile('file1.pdf'));
    formData.append('uploads[]', createFile('file2.pdf'));

    api.postUpload(formData);

    const request = jasmine.Ajax.requests.mostRecent();

    request.respondWith({
      responseText: ['file1.pdf', 'file2.pdf'],
      status: 201
    });

    expect(request.method).toEqual('POST');
    expect(request.url).toEqual('/api/upload');
    expect(request.params).toEqual(formData);
  });

  it('should post to api/upload and call callback when finished', (done) => {
    const formData = new FormData();

    formData.append('uploads[]', createFile('file1.pdf'));
    formData.append('uploads[]', createFile('file2.pdf'));

    jasmine.Ajax.stubRequest('/api/upload').andReturn({
      responseText: '["file1.pdf", "file2.pdf"]',
      status: 201
    });

    api.postUpload(formData, (data) => {
      expect(data.length).toEqual(2);

      done();
    });
  });
});
