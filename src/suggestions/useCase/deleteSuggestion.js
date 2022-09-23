const db = require('../../../dbConfig/db/models');
const {BusinessError} = require('../../error/errorEntity');
const findSuggesstionById = require('./findSuggestionById');

module.exports = async (suggestionId) => {
    await findSuggesstionById(suggestionId);

    await db.Suggestions.destroy({
        where: {
            id: suggestionId
        }
    })
}