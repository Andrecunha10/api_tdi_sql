const joi = require('joi')

module.exports = (req, res, next) => {
    const body = req.body

    const bodySchema = joi.object({
        message: joi.string().max(225),
        problemId: joi.number(),
        userId: joi.number()
    })

    const schemaResult = bodySchema.validate(body)

    if(schemaResult.error) {
        const detailsMessage = schemaResult.error.details.map(item => {
            return item.message
        })
        return res.status(400).json({
            message: detailsMessage.join(';')
        })
    }

    return next()
} 