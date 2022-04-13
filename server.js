var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//route redirection
const userRoute = require("./Routes/index")
app.use('/users', userRoute);
// set port
const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;