/**
 * express server setup
 */

'use strict';

/***********************************
 **** node module defined here *****
 ***********************************/
const dotenv       = require('dotenv');
const express      = require("express");
const bodyParser   = require("body-parser");
const config       = require("../server/config");
const commonFn     = require("../server/util/commonFunction");
const routes       = require('../server/routes');

// Load Environment vars
dotenv.config()

// creating express server app for server
const app         = express();


/********************************
 ***** Server Configuration *****
 ********************************/
app.set('port', config.serverConfig.port);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

/** middleware for api's logging with deployment mode */
let apiLooger = (req, res, next) => {
    commonFn.messageLogs(null, `api hitted ${req.url} ${ config.serverConfig.environment }`);
    next();
};

/** Used logger middleware for each api call **/
app.use(apiLooger);

/*******************************
 *** For handling CORS Error ***
 *******************************/
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, api_key, Authorization, x-requested-with, Total-Count, Total-Pages, Error-Message');
    res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, OPTIONS');
    res.header('Access-Control-Max-Age', 1800);
    next();
});

/*******************************
 ****** initializing routes ****
 *******************************/
routes(app);


/** server listening */
module.exports = () => {
    /** Server is running here */
    app.listen(config.serverConfig.port, () => {
        commonFn.messageLogs(null, `************** Server is running on ${config.serverConfig.port} **************`);
    });
};
