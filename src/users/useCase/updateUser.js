const db = require('../../../dbConfig/db/models');
const findUserUC = require('./findUserById');
const {BusinessError} = require('../../error/errorEntity')

module.exports = async (userId, body) => {
    const verifyUserExists = await findUserUC(userId);

    if(!verifyUserExists){
        throw new BusinessError('User do not exists!', 404);
    };

    const editUser = await db.Users.update(body, {
        where: {
            id: Number(userId)
        }
    });

    const newUser = await findUserUC(userId);

    return newUser
}