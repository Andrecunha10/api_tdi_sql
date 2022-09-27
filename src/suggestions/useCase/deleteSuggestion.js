const db = require('../../../dbConfig/db/models');
const {BusinessError} = require('../../error/errorEntity');
const findSuggestionById = require('./findSuggestionById');

module.exports = async (suggestionId, user) => {
    const suggestion = await findSuggestionById(suggestionId);

    if(suggestion.dataValues.userId !== user.userId && user.type !== 1){
        throw new BusinessError("You don't have authorization to delete this suggestion.", 401)
    }

    await db.Suggestions.destroy({
        where: {
            id: suggestionId
        }
    })
}