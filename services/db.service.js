const Db = require('../repository/Postgres');
const constants = require('../constants');

class DBService {
  constructor() {
    this.db = new Db();
  }

  connect() {
    return this.db.connect();
  }

  addFile(filename, file) {
    return this.db.run(
      constants.db.sql.INSERT_FILE,
      [filename, file]
    );
  }

  getByName(filename) {
    return this.db.run(
      constants.db.sql.GET_BY_NAME,
      [filename]
    );
  }
}

module.exports = new DBService();
