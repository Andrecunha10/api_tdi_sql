const joi = require('joi')

module.exports = (req, res, next) => {
    const body = req.body
    
    if (Object.keys(body).length === 0 || !body) {
        res.status(400).send('Body is required!')
    }

    const bodySchema = joi.object({
        name: joi.string().min(4).max(45),
        nickname: joi.string().min(3).max(13),
        email: joi.string().email(),
        password:joi.string().min(4).max(24),
        departament: joi.string().min(1).max(3)
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