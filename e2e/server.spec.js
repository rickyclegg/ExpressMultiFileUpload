/* eslint-disable no-magic-numbers */

const fs = require('fs-extra');
const rimraf = require('rimraf');
const path = require('path');
const server = require('../server');
const constants = require('../constants');
const uploadsPath = path.join(__dirname, '..', constants.server.paths.UPLOADS);

describe('Server', () => {
  beforeEach((done) => {
    rimraf.sync(uploadsPath);
    fs.mkdirSync(uploadsPath);

    server.listening.then(done);
  });

  describe('Starting up server', () => {
    it('should start up with no errors', () => {
      expect(server).toBeDefined();
    });
  });

  describe('Uploading files', () => {
    it('should start up with no errors', () => {
      expect(server).toBeDefined();
    });
  });
});
