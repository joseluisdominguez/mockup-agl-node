'use strict'

let functions = {};

/***************************************
 **** Logger for error and success *****
 ***************************************/
functions.messageLogs = (error, success) => {
    if(error) {
        console.log(`\x1b[31m` + error);
    } else {
        console.log(`\x1b[32m` + success);
    }
};

/* exporting all object from here */
module.exports = functions;