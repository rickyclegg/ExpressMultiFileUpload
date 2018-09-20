const Db = require('../repository/Postgres');

class DBService {
  constructor() {
    this.db = new Db();
  }

  connect() {
    return this.db.connect();
  }

  addFile() {
    return this.db.run();
  }
}

module.exports = new DBService();
