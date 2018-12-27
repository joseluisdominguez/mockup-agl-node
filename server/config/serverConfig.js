"use strict";

module.exports = {
    host         : process.env.SERVER_HOST      || "localhost",
    type         : process.env.SERVER_SCHEMA    || "http://",
    port         : process.env.SERVER_PORT      || '4000',
    environment  : process.env.NODE_ENV         || 'development'
};
