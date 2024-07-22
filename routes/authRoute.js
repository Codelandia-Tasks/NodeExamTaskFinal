const express = require('express');
const route = express.Router();
const authController = require('../controller/auth-controller');

route.post('/login', authController.loginUser);

module.exports = route;