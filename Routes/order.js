const express = require("express");
const order = require("../Controllers/order");
const router = express.Router()
const orderController=require('../Controllers/order')

// Retrieve all users 
router.post('/', orderController.order);


module.exports = router;