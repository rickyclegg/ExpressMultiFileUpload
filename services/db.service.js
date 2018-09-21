const Db = require('../repository/Postgres');

class DBService {
  constructor() {
    this.db = new Db();
  }

  connect() {
    return this.db.connect();
  }

  addFile(filename, file) {
    return this.db.run(
      'INSERT INTO files (filename, file) VALUES($1, $2)',
      [filename, file]
    );
  }

  getByName(filename) {
    return this.db.run(
      'SELECT filename FROM files WHERE filename = $1',
      [filename]
    );
  }
}

module.exports = new DBService();
