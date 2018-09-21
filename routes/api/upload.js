const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const constants = require('../../constants');
const uploadService = require('../../services/upload.service');

router.post('/', (req, res) => {
  if (req.files) {
    const files = req.files['uploads[]'] instanceof Array ? req.files['uploads[]'] : [req.files['uploads[]']];

    uploadService.upload(files).then(() => {
      res.status(constants.server.responseCode.CREATED)
        .json(files.map(file => file.name));
    });
  } else {
    res.status(constants.server.responseCode.NOT_FOUND)
      .send();
  }
});

module.exports = router;
