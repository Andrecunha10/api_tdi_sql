const db = require('../../../dbConfig/db/models');
const findSuggestionById = require('./findSuggestionById');
const {BusinessError} = require('../../error/errorEntity')

module.exports = async (suggestionId, body, user) => {
    const suggestion = await findSuggestionById(suggestionId);

    if(suggestion.dataValues.userId !== user.userId && user.type !== 1){
        throw new BusinessError("You don't have authorization to change this suggestion.", 401)
    }

    await db.Suggestions.update(body, {
        where:{
            id: suggestionId
        }
    });

    const updatedSuggestion = await findSuggestionById(suggestionId);

    return updatedSuggestion;
}