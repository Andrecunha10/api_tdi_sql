const db = require('../../../dbConfig/db/models');
const findUserUC = require('./findUserById');
const { BusinessError } = require('../../error/errorEntity');

module.exports = async (userId, body, user) => {
    const userData = await findUserUC(userId);

    if (userData.dataValues.id !== user.userId && user.type !== 1){
        throw new BusinessError("You don't hava authorization to change this user.", 401)
    }

    await db.Users.update(body, {
        where: {
            id: Number(userId)
        }
    });

    const newUser = await findUserUC(userId);

    return newUser
}