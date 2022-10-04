const db = require('../../../dbConfig/db/models');
const { BusinessError } = require('../../error/errorEntity');
const findUserById = require('../../users/services/findUserById');

module.exports = async (userId) => {
    await findUserById(userId);

    const userSuggestions = await db.Suggestions.findAll({
        where:{
            userId: userId
        }
    });

    if(!userSuggestions || userSuggestions.length === 0){
        throw new BusinessError('User has no suggestions!', 202);
        
    }

    return userSuggestions;
}   