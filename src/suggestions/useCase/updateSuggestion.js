const db = require('../../../dbConfig/db/models');
const findSuggestionById = require('./findSuggestionById');

module.exports = async (suggestionId, body) => {
    await findSuggestionById(suggestionId);

    await db.Suggestions.update(body, {
        where:{
            id: suggestionId
        }
    });

    const updatedSuggestion = await findSuggestionById(suggestionId);

    return updatedSuggestion;
}