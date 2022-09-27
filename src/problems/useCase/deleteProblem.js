const db = require('../../../dbConfig/db/models');
const findProblemById = require('./findProblemsById');

module.exports = async (problemId) => {
    await findProblemById(problemId);

    await db.Problems.destroy({
        where: {
            id: problemId
        }
    })

    return
}