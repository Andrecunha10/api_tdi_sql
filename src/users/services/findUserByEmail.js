const db = require('../../../dbConfig/db/models');

module.exports = async (email) => {
    const user= await db.Users.findOne({
        where: {
            email: email
        }
    });

    return user
}