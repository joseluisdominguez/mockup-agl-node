
'use strict';

var express = require('express')
var router = express.Router()

router.use('/test', require('./testRoutes'));

module.exports = router;