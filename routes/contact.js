var express = require('express');
var router = express.Router();
var controller = require('../controllers/contact')(/* construtor */);

router.put('/gravaContato', controller.gravaContato);

module.exports = router;