const db = require('../../../dbConfig/db/models');
const findProblemsById = require('./findProblemsById');


module.exports = async (problemId, body) => {
    await findProblemsById(problemId);

    await db.Problems.update(body, {
        where: {
            id: problemId
        }
    });

    const updetedProblem = await findProblemsById(problemId);

    return updetedProblem
}

