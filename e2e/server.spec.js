/* eslint-disable no-magic-numbers */

const server = require('../server');

describe('Server', () => {
  beforeEach((done) => {
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
