const db = require('../../../dbConfig/db/models');
const { BusinessError } = require('../../error/errorEntity');

module.exports = async ( { name, description, shortDescription, departament } ) => {

    const checkName = await db.Problems.findOne({
        where: {
            name: name
        }
    });

    if (checkName) {
        throw new BusinessError('Another problem has the same name.', 400);
    }

    const problem = {
        name,
        description,
        shortDescription,
        departament,
        status: 'active'
    };

    const newProblem = await db.Problems.create(problem);

    return newProblem;
}