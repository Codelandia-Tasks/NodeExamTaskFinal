const jwt = require('jsonwebtoken');
const { ErrorResult } = require('../utils/results');

const authMiddleware = (req,res,next) => {
    const authenticationHeader = req.headers.authorization;
    const token = authenticationHeader && authenticationHeader.split(' ')[1];
    if (!token) {
        return new ErrorResult('Token not provided');
    }
    const myJwtKey= process.env.MY_JWT_KEY;

    jwt.verify(token, myJwtKey,(err,user) => {
        if(err)
            return new ErrorResult('Invalid token');
        else{
            req.user = user;
            next();
        }
    });
}

module.exports = authMiddleware;