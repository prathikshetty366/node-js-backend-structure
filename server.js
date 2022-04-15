var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//route redirection
const userRoute = require("./Routes/user")
const orderRoute=require("./Routes/order")
app.use('/users', userRoute);
app.use('/order',orderRoute);
// set port
const PORT = process.env.PORT
app.listen(PORT, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;