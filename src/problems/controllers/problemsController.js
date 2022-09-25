const db = require('../../../dbConfig/db/models');
const errorResponse = require('../../error/errorResponse');
const findProblemsByIdUC = require('../useCase/findProblemsById');
const createProblemUC = require('../useCase/createProblem');

class ProblemsController {

    static async getAll(req, res) {
        try {
            const Problems = await db.Problems.findAll();
            res.status(200).send(Problems);
        } catch (error) {
            errorResponse(error, res);
        }
    }

    static async findProblemsById(req, res) {
        const problemsId = req.params.id;

        try {
            const problems = await findProblemsByIdUC(problemsId);
            res.status(200).send(problems);
        } catch (error) {
            errorResponse(error, res);
        }
    }

    static async createProblem (req, res) {
        const body = req.body;

        try {
            const newProblem = await createProblemUC(body);
            res.status(200).send(newProblem);
        } catch (error) {
            errorResponse(error, res);
        }
    }
}

module.exports = ProblemsController;