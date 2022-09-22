const db = require('../../../dbConfig/db/models');
const {BusinessError} = require('../../error/errorEntity');
const findUserByID = require('../../users/useCase/findUserById');
const findProblemByID = require('../../problems/useCase/findProblemsById')

module.exports = async ({message, userId, problemId}) => {
    await findUserByID(userId);
    await findProblemByID(problemId);

    const suggestion = {
        message,
        userId: Number(userId),
        problemId: Number(problemId)
    }

    const newSuggestion = await db.Suggestions.create(suggestion);

    return newSuggestion;
}