const db = require('../../../dbConfig/db/models')
const { BusinessError } = require('../../error/errorEntity')

module.exports = async (userId) => {
    const user = await db.Users.findOne({
        where: {
            id: Number(userId)
        }
    });
    if(!user){
        throw new BusinessError('User not Found', 404)
    }

    const result = {
        id: user.dataValues.id,
        name: user.dataValues.name,
        nickname: user.dataValues.nickname,
        email: user.dataValues.email,
        departament: user.dataValues.departament,
        type: user.dataValues.type,
        status: user.dataValues.status,
        createdAt: user.dataValues.createdAt,
        updatedAt: user.dataValues.updatedAt,
    }

    return result
}