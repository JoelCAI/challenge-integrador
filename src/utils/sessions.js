const session = require('express-session');
//const session = require('cookie-session');
require('dotenv').config();

function initSession() {
  return session({
    secret: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: true
  });
};

module.exports = {
    initSession
};