const db = require('../../../dbConfig/db/models');
const errorResponse = require('../../error/errorResponse');
const findSuggestionByIdUC = require('../services/findSuggestionById');
const createSuggestionUC = require('../services/createSuggestion');
const deleteSuggestionUC = require('../services/deleteSuggestion');
const findSuggestionByUserIdUC = require('../services/findSuggestionsByUserId');
const updateSuggestionUC = require('../services/updateSuggestion');
const SuggestionMapper = require('../mapper/suggestionMapper')
class SugestionController {

    static async getAll(req, res) {

        try {
            const allSuggestions = await db.Suggestions.findAll({ include: db.Users });
            const suggestionsResponse = SuggestionMapper.multiplusSuggestions(allSuggestions);
            res.status(200).send(suggestionsResponse);
        } catch (error) {
            errorResponse(error, res);
        }

    };

    static async findById(req, res) {

        const suggestionId = req.params.id;

        try {
            const suggestion = await findSuggestionByIdUC(suggestionId);

            const suggestionResponse = SuggestionMapper.oneSuggestion(suggestion);

            res.status(200).send(suggestionResponse);

        } catch (error) {
            errorResponse(error, res)
        }
    };

    static async createSuggestion(req, res) {
        const {message, problemId}= req.body;
        const userId = req.user.userId;

        try {
            const newSuggestion = await createSuggestionUC(message, problemId, userId);

            const suggestionResponse = SuggestionMapper.oneSuggestion(newSuggestion);

            res.status(200).send(suggestionResponse);

        } catch (error) {
            errorResponse(error, res)
        }
    };

    static async deleteSuggestion(req, res) {
        const suggestionId = req.params.id;
        const user = req.user

        try {
            await deleteSuggestionUC(suggestionId, user)
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
        const user = req.user
        try {
            const updatedSuggestion = await updateSuggestionUC(suggestionId, body, user)
            return res.status(200).send(updatedSuggestion)
        } catch (error) {
            errorResponse(error, res);
        }
    }
}


module.exports = SugestionController;