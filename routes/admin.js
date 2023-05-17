// route file

const express = require('express');
const router = express.Router();
const usersController = require('../contorllers/usersController');

router.get('/list', usersController.getUsers);
router.get('/delete/:Id', usersController.deleteUser);
router.get('/Update/:Id/:Quantity', usersController.UpdateUser);
router.get('/addUser', usersController.addUser);
router.post('/', usersController.postUser);

module.exports = router;
