/* eslint-disable handle-callback-err */
const fs = require('fs-extra');
const path = require('path');
const rimraf = require('rimraf');
const dbService = require('./db.service');

class UploadService {
  upload(requestFiles) {
    const folderPath = path.join(__dirname, '../uploads');
    let filesToCleanUp = [];

    return dbService.connect()
      .then(() => this._renameFiles(requestFiles, folderPath))
      .then((filePaths) => this._readFiles(
        filePaths.map(filePath => ({filePath, filename: filePath.split('/').pop()})))
      )
      .then(fileObjs => {
        filesToCleanUp = fileObjs;

        return Promise.all(fileObjs.map(({filename, file}) => dbService.addFile(filename, file)));
      })
      .then(() => {
        return this._removeFiles(filesToCleanUp);
      });
  }

  _renameFiles(requestFiles, folderPath) {
    return Promise.all(requestFiles.map(requestFile => this._renameFile(requestFile, folderPath)));
  }

  _renameFile(requestFile, folderPath) {
    const renamedFile = path.join(folderPath, requestFile.name);

    return new Promise(res => {
      fs.rename(requestFile.path, renamedFile, () => res(renamedFile));
    });
  }

  _removeFiles(removals) {
    return Promise.all(removals.map(({filePath}) => this._removeFile(filePath)));
  }

  _removeFile(filePath) {
    return new Promise(res => {
      rimraf(filePath, () => res());
    });
  }

  _readFiles(fileObjs) {
    return Promise.all(fileObjs.map(fileObj => this._readFile(fileObj)));
  }

  _readFile({filename, filePath}) {
    return new Promise(res => {
      fs.readFile(filePath, (err, buffer) => {
        res({file: buffer, filePath, filename});
      });
    });
  }
}

module.exports = new UploadService();
