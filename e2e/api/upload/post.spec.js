const server = require('../../../server');
const constants = require('../../../constants');
const request = require('supertest');
const fs = require('fs-extra');
const rimraf = require('rimraf');

describe('Route: upload', () => {
  describe('POST: /', () => {
    const endpoint = `${constants.server.apiEndpoint.UPLOAD}`;

    beforeEach((done) => {
      rimraf.sync('./uploads/*');
      server.listening.then(done);
    });

    it('should upload files and place on server', (done) => {
      request(server)
        .post(endpoint)
        .attach('uploads[]', './e2e/fixtures/file1.pdf')
        .attach('uploads[]', './e2e/fixtures/file2.pdf')
        .expect(constants.server.responseCode.CREATED)
        .then(() => {
          expect(fs.readdirSync('./uploads/').length).toEqual(2);

          done();
        });
    });
  });
});
