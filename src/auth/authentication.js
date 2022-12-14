const jwt = require('jsonwebtoken');
const {BusinessError} = require('../error/errorEntity');
const errorResponse = require('../error/errorResponse');

module.exports = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;

    if(!token) {
        return res.status(403).send("A token is required for authentication.")
    }

    try {      
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded
    } catch (error) {
        return res.status(401).send("Invalid Token.")
    }

    return next();
}