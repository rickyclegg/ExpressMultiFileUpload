const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const constants = require('../../constants');

router.post('/', (req, res) => {
  if (req.files) {
    res.status(constants.server.responseCode.CREATED)
      .json(Object.keys(req.files));
  } else {
    res.status(constants.server.responseCode.NOT_FOUND)
      .send();
  }
});

module.exports = router;
