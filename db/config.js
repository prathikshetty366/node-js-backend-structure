var mysql = require('mysql');


var dbConn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'todo'
    });
    // connect to database
    dbConn.connect();


    module.exports=dbConn;