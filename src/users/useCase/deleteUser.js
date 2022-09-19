const db = require('../../../dbConfig/db/models');
const findUserUC = require('./findUserById');
const {BusinessError} = require('../../error/errorEntity');

module.exports = async (userId) => {
    const verifyUserExists = await findUserUC(userId);

    if(!verifyUserExists){
        throw new BusinessError('User do not exists!', 400)
    };

    await db.Users.destroy({
        where: {
            id: Number(userId)
        }
    });

    return
}