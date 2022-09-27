const db = require('../../../dbConfig/db/models');
const findUserUC = require('./findUserById');

module.exports = async (userId, body) => {
    await findUserUC(userId);

    await db.Users.update(body, {
        where: {
            id: Number(userId)
        }
    });

    const newUser = await findUserUC(userId);

    return newUser
}