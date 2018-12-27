/**
 * Created by Radhey Shyam on 14/02/18.
 */
"use strict";


'use strict';

let functions           = {};
let testRepository       = require("../repository/testRepository");

functions.testMethod = async () => {
    try {
        var data = await testRepository.testMethod();
        return data;
    } catch (e) {
        throw Error('Error while getting data');
    }
}

module.exports = functions;