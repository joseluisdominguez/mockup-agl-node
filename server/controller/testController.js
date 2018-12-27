"use strict";

let functions           = {};
var testService       = require('../services/testService');

functions.testMethod = async (req, res, next) => {
    try{
        var data = await testService.testMethod();
        return res.status(200).json({status: "OK", data: data});
    } catch(e) {
        return res.status(400).json({status: "KO", message: e.message});
    }
}

module.exports = functions;