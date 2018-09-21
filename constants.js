module.exports = {
  db: {
    sql: {
      GET_BY_NAME: 'SELECT filename FROM files WHERE filename = $1',
      INSERT_FILE: 'INSERT INTO files (filename, file) VALUES($1, $2)'
    }
  },
  node: {
    ERROR_CODE: 1,
    ERROR_CODE_IN_USE: 'is already in use',
    ERROR_CODE_PRIV: 'requires elevated privileges'
  },
  server: {
    BODY_PARSE_LIMIT: '2mb',
    INTERNAL_ERROR_CODE: 500,
    NOT_FOUND_ERROR_CODE: 404,
    PORT_BOUNDARY: 0,
    apiEndpoint: {
      UPLOAD: '/api/upload'
    },
    paths: {
      UPLOADS: 'uploads'
    },
    responseCode: {
      CREATED: 201,
      NOT_FOUND: 404
    }
  }
};
