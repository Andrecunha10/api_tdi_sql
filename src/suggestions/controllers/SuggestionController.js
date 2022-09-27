const db = require('../../../dbConfig/db/models');
const errorResponse = require('../../error/errorResponse');
const findSuggestionByIdUC = require('../useCase/findSuggestionById');
const createSuggestionUC = require('../useCase/createSuggestion');
const deleteSuggestionUC = require('../useCase/deleteSuggestion');
const findSuggestionByUserIdUC = require('../useCase/findSuggestionsByUserId');
const updateSuggestionUC = require('../useCase/updateSuggestion')
class SugestionController {

    static async getAll(req, res) {

        try {
            const allSuggestions = await db.Suggestions.findAll({ include: db.Users });
            //TO TO: Mapper with user data without password.
            res.status(200).send(allSuggestions);
        } catch (error) {
            errorResponse(error, res);
        }

    };

    static async findById(req, res) {

        const suggestionId = req.params.id;

        try {
            const suggestion = await findSuggestionByIdUC(suggestionId);

            res.status(200).send(suggestion);

        } catch (error) {
            errorResponse(error, res)
        }
    };

    static async createSuggestion(req, res) {
        const body = req.body

        try {
            const newSuggestion = await createSuggestionUC(body);

            res.status(200).send(newSuggestion);
        } catch (error) {
            errorResponse(error, res)
        }
    };

    static async deleteSuggestion(req, res) {
        const suggestionId = req.params.id;

        try {
            await deleteSuggestionUC(suggestionId)
            res.status(200).send("Suggestion deleted successfully!");
        } catch (error) {
            errorResponse(error, res);
        }
    };

    static async findSuggestionsByUserID(req, res) {
        const userId = req.params.id;

        try {

            const userSuggestions = await findSuggestionByUserIdUC(userId);
            return res.status(200).send(userSuggestions);

        } catch (error) {

            errorResponse(error, res)

        }
    }

    static async updateSuggestion ( req, res) {
        const suggestionId = req.params.id;
        const body = req.body;
        try {
            const updatedSuggestion = await updateSuggestionUC(suggestionId, body)
            return res.status(200).send(updatedSuggestion)
        } catch (error) {
            errorResponse(error, res);
        }
    }
}


module.exports = SugestionController;