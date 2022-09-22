const db = require('../../../dbConfig/db/models');
const errorResponse = require('../../error/errorResponse');
const findByIdUC = require('../useCase/findSuggestionById');
const createSuggestionUC = require('../useCase/createSuggestion');

class SugestionController {

    static async getAll (req, res) {
        try {

            const allSuggestions = await db.Suggestions.findAll();

            // const suggestionsMap = allSuggestions.map( item => {
            //     const findUser = async () => {
            //        return await db.Users.findOne({
            //         where: {
            //             id: item.dataValues.userId
            //         }
            //        })
            //     }
                
            //     const userData = findUser()

            //     console.log(userData)
                
            //     return item.dataValues.userData = userData
            // })

            res.status(200).send(allSuggestions);

        } catch (error) {
            errorResponse(error, res);
        }
    };

    static async findById (req, res) {
        const suggestionId = req.params.id;

        try {
            const suggestion = await findByIdUC(suggestionId);

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
}


module.exports = SugestionController;