const db = require('../../../dbConfig/db/models');
const findUserByID = require('../../users/services/findUserById');
const findProblemByID = require('../../problems/services/findProblemsById');
const findSuggestionById = require('./findSuggestionById')

module.exports = async (message, problemId, userId) => {

    await findUserByID(userId);
    await findProblemByID(problemId);

    const suggestion = {
        message,
        userId: Number(userId),
        problemId: Number(problemId)
    }

    const newSuggestion = await db.Suggestions.create(suggestion);

    const newSuggestionResponse = await findSuggestionById(newSuggestion.id);

    return newSuggestionResponse;
}