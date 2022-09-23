const db = require('../../../dbConfig/db/models');
const errorResponse = require('../../error/errorResponse');
const findSuggestionByIdUC = require('../useCase/findSuggestionById');
const createSuggestionUC = require('../useCase/createSuggestion');
const deleteSuggestionUC = require('../useCase/deleteSuggestion');

class SugestionController {

    static async getAll (req, res) {
        try {

            const allSuggestions = await db.Suggestions.findAll({ include: db.Users});

            res.status(200).send(allSuggestions);

        } catch (error) {
            errorResponse(error, res);
        }
    };

    static async findById (req, res) {
        const suggestionId = req.params.id;

        try {
            const suggestion = await findSuggestionByIdUC(suggestionId);

            res.status(200).send(suggestion);

        } catch (error) {
            errorResponse(error, res)
        }
    };
    
    static async createSuggestion (req, res) {
        const body = req.body

        try {
            const newSuggestion = await createSuggestionUC(body);

            res.status(200).send(newSuggestion);
        } catch (error) {
            errorResponse(error, res)
        }
    }
    static async deleteSuggestion (req, res) {
        const suggestionId = req.params.id

        console.log('suggestionID', suggestionId)

        try {
            await deleteSuggestionUC(suggestionId)
            res.status(200).send("Suggestion deleted successfully!")
        } catch (error) {
            errorResponse(error, res)
        }
    }
}


module.exports = SugestionController;