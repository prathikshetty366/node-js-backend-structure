const express = require("express")
const router = express.Router()
const dbConn = require('../db/config')

const userController = require("../Controllers/user.controller")

// Retrieve all users 
router.get('/', userController.user);
// Retrieve user with id 
router.get('/:id', userController.userWithId);
// Add a new user  
router.post('/newuser',userController.newUser);
//  Update user with id
router.put('/edituser',userController.editUser);
//  Delete user
router.delete('/deleteuser',userController.deleteUser );

module.exports = router;