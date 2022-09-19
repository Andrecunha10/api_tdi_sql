const joi = require('joi');

module.exports = (req, res, next) => {
    const id = req.params;

    const idSchema = joi.object({
        id: joi.number().required()
    });

    const schemaResult = idSchema.validate(id)

    if(schemaResult.error) {
        const datailsMessage = schemaResult.error.details.map(item => {
            return item.message
        })

        return res.status(400).json({
            message: datailsMessage.join(';')
        })
    }

    return next()
};