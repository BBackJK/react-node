'use strict'

var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'pjkrud6839'
});

module.exports = {
    connectionPool : pool
};


