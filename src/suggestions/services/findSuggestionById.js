const db = require('../../../dbConfig/db/models')
const {BusinessError} = require('../../error/errorEntity')

module.exports = async (suggestionId) => {
    const suggestion = await db.Suggestions.findByPk(suggestionId, {
        include: [
            db.Users,
            db.Problems,
        ]
    })

    if(!suggestion) {
        throw new BusinessError('Suggestion not found!', 404)
    }

    return suggestion
}