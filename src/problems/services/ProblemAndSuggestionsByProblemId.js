const db = require('../../../dbConfig/db/models');
const {BusinessError} = require('../../error/errorEntity')

module.exports = async (problemId) =>  {

    const problem = await db.Problems.findByPk(problemId, {
        include: [{
            model: db.Suggestions,
            include: db.Users
        }]
    });

    if(!problem) {
        throw new BusinessError("Problem not found.", 404)
    }

    return problem
}