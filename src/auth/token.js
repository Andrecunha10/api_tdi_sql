const jwt = require("jsonwebtoken");

//TO DO: CREAETA A TOKEN KEY IN PROCESS.ENV
module.exports = (userId, email, type) => {
    const token = jwt.sign({
        userId,
        email,
        type
        },
        process.env.TOKEN_KEY,
    );
    return token
} 
