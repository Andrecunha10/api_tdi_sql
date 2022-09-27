const db = require('../../../dbConfig/db/models');
const errorResponse = require('../../error/errorResponse');
const findProblemsByIdUC = require('../useCase/findProblemsById');
const createProblemUC = require('../useCase/createProblem');
const deleteProblemUC = require('../useCase/deleteProblem');
const updateProblemUC = require('../useCase/updateProblem');
const problemAndSuggestionsByProblemIdUC = require('../useCase/ProblemAndSuggestionsByProblemId')

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

    static async deleteProblem ( req , res) {
        const problemId = req.params.id

        try {
            await deleteProblemUC(problemId);
            return res.status(200).send({
                message: "Problem deleted successfully."
            })
        } catch (error) {
            errorResponse(error, res)
        }
    }

    static async updateProblem (req, res) {
        const problemId = req.params.id;
        const body = req.body;
        try {
            const updatedProblem = await updateProblemUC(problemId, body);
            return res.status(200).send(updatedProblem);
        } catch (error) {
            errorResponse(error, res);
        }
    }

    static async problemAndSuggestionsByProblemId ( req, res) {
        const problemId = req.params.id;

        try {
            const problem = await problemAndSuggestionsByProblemIdUC(problemId);
            return res.status(200).send(problem);
        } catch (error) {
            errorResponse(error, res);
        }
    }
}

module.exports = ProblemsController;