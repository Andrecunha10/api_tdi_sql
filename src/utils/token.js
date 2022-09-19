const jwt = require("jsonwebtoken");

//TO DO: CREAETA A TOKEN KEY IN PROCESS.ENV
module.exports = (userId, userEmail) => {
    const token = jwt.sign({
        user_id: userId,
        email: userEmail
        },
        process.env.TOKEN_KEY,
        {
        expiresIn: "2h",
        }
    );
    return token
} 
