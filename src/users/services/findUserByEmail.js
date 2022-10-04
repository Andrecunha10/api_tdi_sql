const db = require('../../../dbConfig/db/models');
const {BusinessError} = require('../../error/errorEntity');

module.exports = async (email) => {
    const user= await db.Users.findOne({
        where: {
            email: email
        }
    });

    return user
}