var mysql = require('mysql');

var dbConn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
    });
    // connect to database
    dbConn.connect();
    module.exports=dbConn;