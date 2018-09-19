describe('FileHtml', () => {
  let fileHtml;

  beforeEach(() => {
    fileHtml = new rjc.FileHtml();
  });

  it('should exist', () => {
    expect(fileHtml).toBeDefined();
  });

  it('should return a html snippet for a new file upload with id 1', () => {
    const fixture = setFixtures(fileHtml.createNewFileInput());

    expect(fixture.find('input').length).toEqual(2);
    expect(fixture.find('#upload0File')).toHaveLength(1);
    expect(fixture.find('#upload0Btn')).toHaveLength(1);
  });

  it('should return a html snippet incrementing the id by id', () => {
    fileHtml.createNewFileInput();

    const fixture = setFixtures(fileHtml.createNewFileInput());

    expect(fixture.find('input').length).toEqual(2);
    expect(fixture.find('#upload1File')).toHaveLength(1);
    expect(fixture.find('#upload1Btn')).toHaveLength(1);
  });
});
