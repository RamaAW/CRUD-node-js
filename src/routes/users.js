const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const UserController = require('../controller/users.js');

const router = express.Router();

// CREATE - POST
router.post('/', UserController.createNewUser);

// CREATE - GET
router.get('/', UserController.getAllUsers);

// CREATE - GET - ID
router.get('/:id', UserController.getUserById);

// UPDATE - PATCH
router.patch('/:id', UserController.updateUser);

// DELETE - DELETE
router.delete('/:id', UserController.deleteUser)

module.exports = router;
