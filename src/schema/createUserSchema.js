const joi = require('joi')

module.exports = (req, res, next) => {
    const body = req.body

    const bodySchema = joi.object({
        name: joi.string().min(4).max(45).required(),
        nickname: joi.string().min(3).max(13).required(),
        email: joi.string().email().required(),
        password:joi.string().min(4).max(24).required(),
        departament: joi.string().min(1).max(3).required()
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