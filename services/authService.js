const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

const userService = require('../services/userService');
const AccessToken = require('../utils/AccessToken');
const { ErrorResult, SuccessResult } = require('../utils/results');
const { USER_NOT_FOUND, PASSWORD_INCORRECT, LOGIN_SUCCESSFULLY } = require('../utils/messages/messages');

const loginUser = async (user) => {
    const checkUser = await userService.getUserByUsername(user.username);
    if (checkUser.status === false)
        return new ErrorResult(USER_NOT_FOUND);
    const checkPassword = await bcrypt.compare(user.password, checkUser.data.password);
    if (!checkPassword) {
        return new ErrorResult(PASSWORD_INCORRECT);
    }

    const token = jwt.sign({ username: checkUser.data.username }, process.env.MY_JWT_KEY, { expiresIn: '8m' });
    const expireDate = new Date();
    expireDate.setMinutes(expireDate.getMinutes() + 8);
    const accessToken = new AccessToken(token, expireDate.toString());
    console.log(accessToken);
    return new SuccessResult(LOGIN_SUCCESSFULLY, accessToken);
}

module.exports = {
    loginUser
}