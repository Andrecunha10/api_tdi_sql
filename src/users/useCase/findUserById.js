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

    return user
}