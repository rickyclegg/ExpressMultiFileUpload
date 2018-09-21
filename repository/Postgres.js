const debug = require('debug')('ExpressMultiFileUpload:postgres');
const {Client} = require('pg');

class Postgres {
  connect() {
    const client = new Client();
    const query = 'CREATE TABLE IF NOT EXISTS files (filename text, file bytea)';

    debug('Prepare Postgres');

    return client.connect()
      .then(() => client.query(query))
      .then(() => client.end());
  }

  run(query, values) {
    const client = new Client();
    let results;

    debug(`Run ${query}`);

    return client.connect()
      .then(() => client.query(query, values))
      .then((data) => {
        results = data;

        return client.end();
      })
      .then(() => results);
  }
}

module.exports = Postgres;
