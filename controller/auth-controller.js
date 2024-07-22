const authModel = require('../models/auth/auth-model');
const authService = require('../services/authService');
const { ErrorResult, SuccessResult } = require('../utils/results');

const loginUser = async (req,res) => {
    const authModelDTO = new authModel(req.body);
    const result = await authService.loginUser(authModelDTO);
    if (result.status !== true) {
        return new ErrorResult('',result);
    }
    return new SuccessResult('',result);
}

module.exports = {
    loginUser
}