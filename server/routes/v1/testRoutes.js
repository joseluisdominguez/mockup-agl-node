'use strict';

var express = require('express');
var router = express.Router();
let testController = require("../../controller/testController");

router.get('/', testController.testMethod);

module.exports = router;
