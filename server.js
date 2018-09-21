require('dotenv').config();

const debug = require('debug')('ExpressMultiFileUpload:server');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const apiUploadRoute = require('./routes/api/upload');
const app = express();
const http = require('http');
const constants = require('./constants');
const formidable = require('express-formidable');
const fs = require('fs-extra');
const uploadsPath = path.join(__dirname, constants.server.paths.UPLOADS);
let port;
let server;

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;

  debug(`Listening on ${bind}`);

  if (!fs.existsSync(uploadsPath)) {
    fs.mkdirSync(uploadsPath);
  }

  app.isListening = true;
  app.listeningRes();
}

function normalizePort(val) {
  const normPort = parseInt(val, 10);

  if (isNaN(normPort)) {
    return val;
  }

  if (normPort >= constants.server.PORT_BOUNDARY) {
    return normPort;
  }

  return false;
}

function onError(error) {
  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
  case 'EACCES':
    throw new Error(`${constants.node.ERROR_CODE}: ${bind} ${constants.node.ERROR_CODE_PRIV}`);
  case 'EADDRINUSE':
    throw new Error(`${constants.node.ERROR_CODE}: ${bind} ${constants.node.ERROR_CODE_IN_USE}`);
  default:
    throw error;
  }
}

debug(`Server starting on env ${process.env.NODE_ENV}`);

app.isListening = false;
app.listening = new Promise(res => {
  app.listeningRes = res;
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json({limit: constants.server.BODY_PARSE_LIMIT}));
app.use(bodyParser.urlencoded({'extended': false}));
app.use(cookieParser());
app.use(express.static('public'));
app.use(formidable({multiples: true, uploadDir: uploadsPath}));
app.use('/', index);
app.use(constants.server.apiEndpoint.UPLOAD, apiUploadRoute);

app.use((req, res, next) => {
  const err = new Error('Not Found');

  err.status = constants.server.NOT_FOUND_ERROR_CODE;

  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || constants.server.INTERNAL_ERROR_CODE);
  res.render('error');
});

port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

module.exports = app;
