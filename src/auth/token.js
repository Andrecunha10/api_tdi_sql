const jwt = require("jsonwebtoken");

//TO DO: CREAETA A TOKEN KEY IN PROCESS.ENV
module.exports = (userId, userEmail, userType) => {
    const token = jwt.sign({
        user_id: userId,
        email: userEmail,
        type: userType
        },
        process.env.TOKEN_KEY,
        {
        expiresIn: "2h",
        }
    );
    return token
} 
